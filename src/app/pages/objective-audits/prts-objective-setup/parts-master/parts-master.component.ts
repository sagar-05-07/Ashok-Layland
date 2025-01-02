import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddPartsComponent } from './add-parts/add-parts.component';
import { SuppilerPopComponent } from './suppiler-pop/suppiler-pop.component';

@Component({
  selector: 'app-parts-master',
  templateUrl: './parts-master.component.html',
  styleUrls: ['./parts-master.component.scss']
})
export class PartsMasterComponent implements OnInit {


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
    {
      chek: true,
      parts: 'Air Filter',
      partscode: 'AF-123',
      partsfamily: 'Engine Components',
      commodity: 'Casting',
      status: true
    },
    {
      chek: true,
      parts: 'Oil Filter',
      partscode: 'OF-456',
      partsfamily: 'Engine Components',
      commodity: 'Forging',
      status: false
    },
    {
      parts: 'Brake Pad',
      partscode: 'BP-789',
      partsfamily: 'Braking Systems',
      commodity: 'Machining',
      status: true
    },
    {
      parts: 'Fuel Pump',
      partscode: 'FP-321',
      partsfamily: 'Fuel Systems',
      commodity: 'Fasteners',
      status: false
    },
    {
      parts: 'Starter Motor',
      partscode: 'SM-654',
      partsfamily: 'Electrical Systems',
      commodity: 'Non-Metallic',
      status: true
    },
    {
      chek: true,
      parts: 'Alternator',
      partscode: 'AL-987',
      partsfamily: 'Electrical Systems',
      commodity: 'Sheet Metal',
      status: true
    },
  ];



  addcategory(item) {
    this.dialog.open(AddPartsComponent, {
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

  locationPop(item) {
    this.dialog.open(SuppilerPopComponent, {
      data: item,
      width: "900px",
      height: "auto"
    })
  }

}


