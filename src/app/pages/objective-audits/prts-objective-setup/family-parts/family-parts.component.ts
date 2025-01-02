import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddPartsFamilyComponent } from './add-parts-family/add-parts-family.component';

@Component({
  selector: 'app-family-parts',
  templateUrl: './family-parts.component.html',
  styleUrls: ['./family-parts.component.scss']
})
export class FamilyPartsComponent implements OnInit {

  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog,) { }

  values = []
  hidden = false;
  url = "/assets/carrear.jpeg"

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }


  values1 = [
    { category: 'Engine Components', status: true },
    { category: 'Transmission Systems', status: true },
    { category: 'Chassis and Frame', status: false },
    { category: 'Suspension Parts', status: true },
    { category: 'Electrical Systems', status: false },
    { category: 'Braking Systems', status: true },
    { category: 'Body and Cabin', status: true },
    { category: 'Fuel Systems', status: false },
    { category: 'Cooling Systems', status: true },
    { category: 'Steering Systems', status: true },
  ];



  addcategory(item) {
    this.dialog.open(AddPartsFamilyComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  openimg() {

  }

  imageSource1() {
    window.open("/assets/carrear.jpeg");
  }

  imageSource() {
    this.hidden = !this.hidden;
  }

}

