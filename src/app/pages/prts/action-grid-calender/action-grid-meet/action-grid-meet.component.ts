import { AddActionGridMeetComponent } from './add-action-grid-meet/add-action-grid-meet.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { PartsData } from '../../PartsData';

@Component({
  selector: 'app-action-grid-meet',
  templateUrl: './action-grid-meet.component.html',
  styleUrls: ['./action-grid-meet.component.scss']
})
export class ActionGridMeetComponent implements OnInit {

  filterToggle: boolean = false;
  totalSize: any;
  currentPage: any;
  pageSize: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.actionGrid();
    }
    else {

    }
  }

  values = [
  ];


  addMeeting(item) {
    this.dialog.open(AddActionGridMeetComponent, {
      data: item,
      width: "850px",
      height: "auto"
    })
  }


}
