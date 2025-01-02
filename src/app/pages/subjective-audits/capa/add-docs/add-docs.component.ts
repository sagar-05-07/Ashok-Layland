import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-docs',
  templateUrl: './add-docs.component.html',
  styleUrls: ['./add-docs.component.scss']
})
export class AddDocsComponent implements OnInit {

  public currentPage = 0;
  public totalSize = 0;
  // close() { }

  users = [{ type: "Document check", subject: "" }]
  constructor(
    public dialogRef: MatDialogRef<AddDocsComponent>,
    @Inject(MAT_DIALOG_DATA) public lead: any,
    public fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}


