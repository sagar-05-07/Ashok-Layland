import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-parts-family',
  templateUrl: './add-parts-family.component.html',
  styleUrls: ['./add-parts-family.component.scss']
})
export class AddPartsFamilyComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddPartsFamilyComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
