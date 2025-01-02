import { UserAudittypeComponent } from './user-audittype/user-audittype.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { environment } from 'src/environments/environment';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProjPermComponent } from './proj-perm/proj-perm.component';
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';
import { ManagerDialogComponent } from './manager-dialog/manager-dialog.component';
import { admindata } from '../../admindata';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  clickEventSubscription: Subscription;

  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };
  tableList: Object[] = [];
  alltableListLookup: any;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
  public currentPage = 0;
  public totalSize = 0;
  tableListLookup = [];
  public allReports: Array<any> = [];
  sortedData = [];
  filteredAlerts = [];
  status = [{ id: 1, value: "Active" }, { id: 2, value: "Inactive" }];
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  filterForm: FormGroup;
  filteredUsers = [];

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';

  allRoles: any;
  filterToggle: boolean;
  public searchText: string;
  public page: any;
  allUsers: any = [];
  userData: any = [];
  roleId: any;
  private _activeRoute: any;
  service: any;
  alertService: any;
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,
    public titleService: Title, public _menuService: MenuService,) {
    this.sortedData = this.users.slice();
    this.filterForm = this.fb.group({
      Status: new FormControl(null),
      Keyword: new FormControl('',)
    });
  }
  public setTitle(newTitle: string) {
    // this.titleService.setTitle(newTitle);
  }
  users = [];


  ngOnInit() {
    // this.getallusers();
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.users = admindata.user();
    }
    else {

    }


  }

  getallusers() {
    this.service.GetAllUsers().subscribe(data => {
      if (data != null) {
        this.users = data['Data'];
        this.sortedData = this.users.slice();
        this.bindData(data['Data']);
      }
    });
  }

  deleteUser(data: any) {
    var list = {
      UserId: data.UserId,
      result: null
    };

    this.service.DeleteUser(list).subscribe(data => {
      // console.log(data);
      this.getallusers();
      this.alertService.createAlert('User Deleted Successfully', 1);
    });
  }

  changestatus(data: any) {
    var list = {
      UserId: data.UserId
    };
    this.service.ChangeUserStatus(list).subscribe(res => {
      // console.log(data);
      this.getallusers();
    })
    this.alertService.createAlert('User Status Changed Successfully', 1);
  }

  openEditDialog(item) {
    let dialogRef = this.dialog.open(EditUserComponent, {
      data: item,
      height: 'auto',
      width: '850px'
    });
    dialogRef.afterClosed().subscribe(data => {

      console.log(data, "data")
      if (data === "SAVE") {

        this.getallusers();
      }
    });
  }
  onpermclick(item) {
    this.router.navigate(['admin/manage-users/permission/' + item.RoleId]);
  }
  openResetPassword(item) {
    let dialogRef = this.dialog.open(ResetPasswordDialogComponent, {
      data: item,
      height: 'auto',
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getallusers();
    });
  }

  openProjectPermissions() {
    let dialogRef = this.dialog.open(ProjPermComponent, {
      data: null,
      height: 'auto',
      width: '600px'
    });
  }

  openManagersDialog() {
    let dialogRef = this.dialog.open(ManagerDialogComponent, {
      data: null,
      height: 'auto',
      width: '350px'
    });
  }


  audit() {
    let dialogRef = this.dialog.open(UserAudittypeComponent, {
      data: null,
      height: 'auto',
      width: '600px'
    });

  }

  public bindData(data) {
    //this.allRoles = data['RolesList'];
    this.allRoles = data;
    this.filter();
  }

  filter() {
    console.log(this.filterForm.value);
    this.filteredUsers = this.allRoles;
    let keyword = this.filterForm.controls['Keyword'].value;
    let status = this.filterForm.controls['Status'].value;

    if (keyword != null && keyword != '') {
      this.filteredUsers = this.filteredUsers.filter(function (item) {
        return JSON.stringify(item).toLowerCase().includes(keyword.toLowerCase());
      });
    }
    if (status != null) {
      this.filteredUsers = this.filteredUsers.filter(x => x['IsActive'] == status);
    }

    this.users = this.filteredUsers.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = this.filteredUsers.length;
    this.sortedData = this.users.slice();
  }

  clearFilter() {
    this.filterForm.reset();
    this.getallusers();
  }

  public handlePage(e: any) {
    this.getallusers();
    this.allReports = this.users;
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.users = this.allReports.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.sortedData = this.users;
    console.log(this.sortedData);
  }

  // delete pop-up
  deleteConfirmation() {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }

  // Active/InActive pop-up
  Confirmation() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Change Status', content: 'Are you sure you want to Change the Status ?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }

}
