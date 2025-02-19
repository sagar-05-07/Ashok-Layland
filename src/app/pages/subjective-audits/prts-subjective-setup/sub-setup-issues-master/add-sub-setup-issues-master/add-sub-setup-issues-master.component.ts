import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sub-setup-issues-master',
  templateUrl: './add-sub-setup-issues-master.component.html',
  styleUrls: ['./add-sub-setup-issues-master.component.scss']
})
export class AddSubSetupIssuesMasterComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddSubSetupIssuesMasterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }


}
