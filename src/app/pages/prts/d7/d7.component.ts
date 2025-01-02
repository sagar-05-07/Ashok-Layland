import { environment } from './../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartsData } from '../PartsData';
import { AddActionGridMeetComponent } from '../action-grid-calender/action-grid-meet/add-action-grid-meet/add-action-grid-meet.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-d7',
  templateUrl: './d7.component.html',
  styleUrls: ['./d7.component.scss']
})
export class D7Component implements OnInit {
values : any= [];
  constructor(public router: Router, public dialog: MatDialog,) { }

  ngOnInit(): void {
    if(environment.mode == 1){
this.values = PartsData.GetD7tData();
    }
    else{

    }
  }
  
  next(){
    this.router.navigate(['/app/prtsnavbar/closure']);
  }
  back(){
    this.router.navigate(['/app/prtsnavbar/d6']);
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
