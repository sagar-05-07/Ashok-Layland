import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-cuase',
  templateUrl: './add-cuase.component.html',
  styleUrls: ['./add-cuase.component.scss']
})
export class AddCuaseComponent implements OnInit {

  NotesForm: FormGroup;
  isProject: boolean = false;
  isSaveBtnClicked: boolean = false;
  todayDate = new Date();
  manageService: any;

  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddCuaseComponent>,
  ) {

  }
  ngOnInit() {
  }

  close(value) {
    this.dialogRef.close(value);
  }

}
