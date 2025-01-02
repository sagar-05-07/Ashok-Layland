import { AddObjSetupCategoryMasterComponent } from './add-obj-setup-category-master/add-obj-setup-category-master.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-obj-setup-category-master',
  templateUrl: './obj-setup-category-master.component.html',
  styleUrls: ['./obj-setup-category-master.component.scss']
})
export class ObjSetupCategoryMasterComponent implements OnInit {

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
    { category: 'Dimensional Checks', status: true, Audit: 'C - Rating' },
    { category: 'Surface Finish', status: true, Audit: 'C - Rating' },
    { category: 'Performance', status: true, Audit: 'D - Rating' },
    { category: 'Metallurgical', status: true, Audit: 'D - Rating' },
    { category: 'Mechanical', status: true, Audit: 'D - Rating' },
  ]



  addcategory(item) {
    this.dialog.open(AddObjSetupCategoryMasterComponent, {
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
