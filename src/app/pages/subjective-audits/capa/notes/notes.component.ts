import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  NotesForm: FormGroup;
  isProject: boolean = false;
  isSaveBtnClicked: boolean = false;
  todayDate = new Date();
  manageService: any;

  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NotesComponent>,
  ) {

  }
  ngOnInit() {
  }

  close(value) {
    this.dialogRef.close(value);
  }

}

