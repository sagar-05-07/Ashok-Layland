import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Onepager } from '../../Onepager';
import { AddActionGridViewComponent } from './add-action-grid-view/add-action-grid-view.component';

@Component({
  selector: 'app-action-grid-view',
  templateUrl: './action-grid-view.component.html',
  styleUrls: ['./action-grid-view.component.scss']
})
export class ActionGridViewComponent implements OnInit {

  filterToggle: boolean = false;
  totalSize: any;
  currentPage: any;
  pageSize: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = Onepager.actionGrid();
    }
    else {

    }
  }

  values = [
  ];


  addMeeting(item) {
    this.dialog.open(AddActionGridViewComponent, {
      data: item,
      width: "850px",
      height: "auto"
    })
  }

}
