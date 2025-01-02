import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AddActionGridMeetComponent } from '../action-grid-calender/action-grid-meet/add-action-grid-meet/add-action-grid-meet.component';
import { PartsData } from '../PartsData';
@Component({
  selector: 'app-d4-b',
  templateUrl: './d4-b.component.html',
  styleUrls: ['./d4-b.component.scss']
})
export class D4BComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.getd4();
    }
    else {

    }
  }
  values=[
   
  ]
  next(){
    this.router.navigate(['/app/prtsnavbar/d5']);
  }
  back(){
    this.router.navigate(['/app/prtsnavbar/d4']);
  }
  action() {
    this.router.navigate(['/app/prtsnavbar/why']);
  }
  addMeeting(item) {
    this.dialog.open(AddActionGridMeetComponent, {
      data: item,
      width: "850px",
      height: "auto"
    })
  }
}
