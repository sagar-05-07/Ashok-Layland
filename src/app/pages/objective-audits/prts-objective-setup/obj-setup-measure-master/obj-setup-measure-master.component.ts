import { AddObjSetupMeasureMasterComponent } from './add-obj-setup-measure-master/add-obj-setup-measure-master.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-obj-setup-measure-master',
  templateUrl: './obj-setup-measure-master.component.html',
  styleUrls: ['./obj-setup-measure-master.component.scss']
})
export class ObjSetupMeasureMasterComponent implements OnInit {

  filterToggle = false;
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

  values1 = [
    { ColorCode: 'Red', category: 'Exterior', measurement: 'Gap', status: true, Audit: 'Product Quality Audit' },
    { ColorCode: 'Blue', category: 'Interior', measurement: 'Alignment', Audit: 'Body Audit' },
    { ColorCode: 'Green', category: 'Exterior', measurement: 'Flush', status: true, Audit: 'Product Quality Audit' },
    { ColorCode: 'Yellow', category: 'Interior', measurement: 'Parallelism', status: true, Audit: 'Paint Audit' },
    { ColorCode: 'Pink', category: 'Exterior', measurement: 'Consistency', status: true, Audit: 'Product Quality Audit' },
  ]
  opendashboard() {
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  addmeasurement(item) {
    this.dialog.open(AddObjSetupMeasureMasterComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
  }

}
