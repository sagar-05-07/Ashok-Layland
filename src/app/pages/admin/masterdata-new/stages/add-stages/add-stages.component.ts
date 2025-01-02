import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-stages',
  templateUrl: './add-stages.component.html',
  styleUrls: ['./add-stages.component.scss']
})
export class AddStagesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddStagesComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
