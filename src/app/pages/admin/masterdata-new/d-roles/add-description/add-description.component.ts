import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.scss']
})
export class AddDescriptionComponent implements OnInit {
  myGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddDescriptionComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
