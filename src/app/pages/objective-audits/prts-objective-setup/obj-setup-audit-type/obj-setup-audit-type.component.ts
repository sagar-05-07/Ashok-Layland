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

  values = []
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle: boolean = false;

  values1 = [
    { modulename: "C - Rating", modulecode: "CR", status: true },
    { modulename: "D - Rating", modulecode: "DR", status: true },
    { modulename: "Eng Spec Test", modulecode: "EST" },
    { modulename: "Torque Audit", modulecode: "TA", status: true },
    { modulename: "Body Leak Test", modulecode: "BLT", status: true },

  ]

  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  public addaudit(item) {
    this.dialog.open(AddObjSetupAuditTypeComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

}
