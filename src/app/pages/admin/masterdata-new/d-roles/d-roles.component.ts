import { AddDocumentComponent } from './add-document/add-document.component';
import { AddpillarComponent } from './addpillar/addpillar.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddDescriptionComponent } from './add-description/add-description.component';
import { AddRolesComponent } from './add-roles/add-roles.component';

@Component({
  selector: 'app-d-roles',
  templateUrl: './d-roles.component.html',
  styleUrls: ['./d-roles.component.scss']
})
export class DRolesComponent implements OnInit {
  dropdownList: any[];
  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  constructor(public dialog: MatDialog,) {

  }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  values = []
  ngOnInit() {

    // this.dropdownList =
    //   [
    //     { name: 'Admin', checked: false },
    //     { name: 'Pavan', checked: false },
    //     { name: 'Satya', checked: false },
    //     { name: 'Surya', checked: false }
    //   ]

    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  options: Array<any> = [
    { RoleName: "Admin", RoleId: 1 },
    { RoleName: "Pavan", RoleId: 2 },
    { RoleName: "Surya", RoleId: 3 },
    { RoleName: "Satya", RoleId: 4 },
  ]


  filterToggle: boolean = false;

  values1 = [
    {stepcode:'D1', stepname: "Process",checklist:'5', status: true },
    {stepcode:'D2', stepname: "Tools",checklist:'5', status: true },
    {stepcode:'D3a', stepname: "Production",checklist:'5', status: true },
    {stepcode:'D3b', stepname: "SQM",checklist:'5', status: true },
    {stepcode:'D4a', stepname: "Internal Quality Control",checklist:'NA', status: true },
    {stepcode:'D4b', stepname: "Supplier Part Quality",checklist:'NA', status: true },
    {stepcode:'D5', stepname: "Process ENG",checklist:'NA', status: true },
    {stepcode:'D6', stepname: "Product ENG",checklist:'NA', status: true },
    {stepcode:'D7', stepname: "CFT",checklist:'NA', status: true },

  ]
  statusOptions = [
    { value: 1, name: 'Prepared Quote', colorCode: '#00ff0040' },
    { value: 2, name: 'PM Quote Review', colorCode: '#C0C0C0' },
    { value: 3, name: 'Quote Send', colorCode: '#87CEFA' },
    { value: 4, name: 'Awarded', colorCode: '#FFA50069' },
    { value: 5, name: 'Rejected', colorCode: '#FFFF00' },
    { value: 6, name: 'Document Taker Only', colorCode: '#FF00FF' },
  ]
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
  }

  public addmodule(item) {
    this.dialog.open(AddRolesComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

  public adddesc(item) {
    this.dialog.open(AddDescriptionComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

  public addchecklist(item){
    this.dialog.open(AddpillarComponent,{
      data: item,
      width: "580px",
      height: "auto"
    })
  }

  public adddocument(item){
    this.dialog.open(AddDocumentComponent,{
      data: item,
      width: "580px",
      height: "auto"
    })
  }

  
  
  box(){
    // this.dialog.open(AddpillarComponent, {
      
    //   width: "600px",
    //   height: "auto"

    // })
  }
}

