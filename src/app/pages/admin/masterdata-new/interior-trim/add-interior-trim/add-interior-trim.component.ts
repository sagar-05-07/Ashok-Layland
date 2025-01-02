import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-interior-trim',
  templateUrl: './add-interior-trim.component.html',
  styleUrls: ['./add-interior-trim.component.scss']
})
export class AddInteriorTrimComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddInteriorTrimComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}

