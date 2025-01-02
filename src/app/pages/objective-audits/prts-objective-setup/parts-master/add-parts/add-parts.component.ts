import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-parts',
  templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.scss']
})
export class AddPartsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddPartsComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
