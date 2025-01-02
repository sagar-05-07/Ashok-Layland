import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridViewComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
