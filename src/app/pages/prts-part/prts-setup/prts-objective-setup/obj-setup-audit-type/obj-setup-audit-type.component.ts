import { AddObjSetupAuditTypeComponent } from './add-obj-setup-audit-type/add-obj-setup-audit-type.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-obj-setup-audit-type',
  templateUrl: './obj-setup-audit-type.component.html',
  styleUrls: ['./obj-setup-audit-type.component.scss']
})
export class ObjSetupAuditTypeComponent implements OnInit {

 
  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog,) { }

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
values=[]
  ngOnInit() {
    if (environment.mode == 1){
      this.values= this.values1
    }
    else {
      return;
    }
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values1 = [
    {modulename:"C - Rating",status:true},
    {modulename:"D - Rating",status:true},
    {modulename:"Eng Spec Test",status:true},
    {modulename:"Torque Audit",status:true},
    {modulename:"Body Leak Test",status:true},

  ]

  saveStatus() {
   // this.alertService.createAlert('Successfully saved.', 1);
  }

  public addaudit(item){
    this.dialog.open(AddObjSetupAuditTypeComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }

}
