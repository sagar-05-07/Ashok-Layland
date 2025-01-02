import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SubjectiveReports } from 'src/app/pages/subjective-audits/subjective-reports/subjective-reports.data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-psr-pop',
  templateUrl: './add-psr-pop.component.html',
  styleUrls: ['./add-psr-pop.component.scss']
})
export class AddPsrPopComponent implements OnInit {

  currentPage: number;
  pageSize: number = parseInt(localStorage.getItem('hanndover-master') ? localStorage.getItem('handover-master') : '50')
  totalSize: number;
  fromIndex: number = 0;
  toIndex: any = parseInt(sessionStorage.getItem('gridValue') ? sessionStorage.getItem('gridValue') : '50');
  filterForm: FormGroup;
  filterToggle: boolean;
  tableList: Array<any> = [];
  issues: any[];
  data = new SubjectiveReports();

  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    public router: Router,
    public dialogRef: MatDialogRef<AddPsrPopComponent>,
  ) {
    this.filterForm = this.fb.group({
    });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      this.tableList = this.data.checkpoint();
    }
    else {
      return;
    }
  }

  reference() {
    window.open('/#/app/prts-part/prtsissuestatus/psr');
  }

  close(): void {
    this.dialogRef.close();
  }
}




