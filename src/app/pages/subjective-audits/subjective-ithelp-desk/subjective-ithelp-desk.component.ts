import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subjective-ithelp-desk',
  templateUrl: './subjective-ithelp-desk.component.html',
  styleUrls: ['./subjective-ithelp-desk.component.scss']
})
export class SubjectiveIthelpDeskComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SubjectiveIthelpDeskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
