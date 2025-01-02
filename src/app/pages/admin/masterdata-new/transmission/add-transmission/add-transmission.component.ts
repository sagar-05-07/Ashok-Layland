import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-transmission',
  templateUrl: './add-transmission.component.html',
  styleUrls: ['./add-transmission.component.scss']
})
export class AddTransmissionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddTransmissionComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
