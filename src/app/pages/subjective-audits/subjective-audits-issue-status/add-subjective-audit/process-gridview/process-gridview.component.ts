import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-process-gridview',
  templateUrl: './process-gridview.component.html',
  styleUrls: ['./process-gridview.component.scss']
})
export class ProcessGridviewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProcessGridviewComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
