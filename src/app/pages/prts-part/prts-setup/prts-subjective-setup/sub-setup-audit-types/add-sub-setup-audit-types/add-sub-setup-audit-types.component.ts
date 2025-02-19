import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sub-setup-audit-types',
  templateUrl: './add-sub-setup-audit-types.component.html',
  styleUrls: ['./add-sub-setup-audit-types.component.scss']
})
export class AddSubSetupAuditTypesComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<AddSubSetupAuditTypesComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
