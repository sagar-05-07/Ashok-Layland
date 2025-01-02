import { AddCuaseComponent } from './../add-cuase/add-cuase.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PartsData } from '../PartsData';
import { MatDialog } from '@angular/material/dialog';
import { AddActionGridMeetComponent } from '../action-grid-calender/action-grid-meet/add-action-grid-meet/add-action-grid-meet.component';
@Component({
  selector: 'app-d1',
  templateUrl: './d1.component.html',
  styleUrls: ['./d1.component.scss']
})
export class D1Component implements OnInit {

  checked = false;
  constructor(public router: Router, public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.getd1();
    }
    else {

    }
  }
  values = [


  ]
  next() {
    this.router.navigate(['/app/prtsnavbar/d2']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/moniter']);
  }
  action() {
    this.router.navigate(['/app/prtsnavbar/why-two']);
  }
  addchecklistaudit() {
    let dialogRef = this.dialog.open(AddCuaseComponent, {

      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });

  }
  addMeeting(item) {
    this.dialog.open(AddActionGridMeetComponent, {
      data: item,
      width: "850px",
      height: "auto"
    })
  }

}
