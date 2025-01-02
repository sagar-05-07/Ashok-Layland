import { Component, OnInit } from '@angular/core';
import { AddCatComponent } from './add-cat/add-cat.component';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-process-cat',
  templateUrl: './process-cat.component.html',
  styleUrls: ['./process-cat.component.scss']
})
export class ProcessCatComponent implements OnInit {

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
    { category: 'Category 1', status: true, Audit: 'C - Rating' },
    { category: 'Category 2', status: true, Audit: 'C - Rating' },
    { category: 'Category 3', status: true, Audit: 'D - Rating' },
    { category: 'Category 4', status: true, Audit: 'D - Rating' },
    { category: 'Category 5', status: true, Audit: 'D - Rating' },
  ]



  addcategory(item) {
    this.dialog.open(AddCatComponent, {
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

