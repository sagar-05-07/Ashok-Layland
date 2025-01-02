import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AddActionGridMeetComponent } from '../action-grid-calender/action-grid-meet/add-action-grid-meet/add-action-grid-meet.component';
import { AddCuaseComponent } from '../add-cuase/add-cuase.component';
import { PartsData } from '../PartsData';
@Component({
  selector: 'app-d2',
  templateUrl: './d2.component.html',
  styleUrls: ['./d2.component.scss']
})
export class D2Component implements OnInit {

  constructor(public router: Router, public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.getd2();
    }
    else {

    }
  }
  values = []
  next() {
    this.router.navigate(['/app/prtsnavbar/d3']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/d1']);
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
