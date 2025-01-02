import { AddIssesComponent } from './add-isses/add-isses.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { AddPsrPopComponent } from './add-psr-pop/add-psr-pop.component';

@Component({
  selector: 'app-sub-issues',
  templateUrl: './sub-issues.component.html',
  styleUrls: ['./sub-issues.component.scss']
})
export class SubIssuesComponent implements OnInit {

  // Pagination variable
  currentPage: number;
  pageSize: number = parseInt(localStorage.getItem('hanndover-master') ? localStorage.getItem('handover-master') : '50')
  totalSize: number;
  fromIndex: number = 0;
  toIndex: any = parseInt(sessionStorage.getItem('gridValue') ? sessionStorage.getItem('gridValue') : '50');

  filterForm: FormGroup;
  filterToggle: boolean;
  tableList: Array<any> = [
    { funtion: 'Aesthetics', module: 'BSO', psr: '2', one: '5', Issues: 'Fuel filler hinge area/Fuel flap edge - Thin Paint & Paint Run down', Defect: 'Thin Paint', Reference: 'H2022191', Initiated: '15-01-2023', Closed: '01-03-2023' },
    { funtion: 'Mutilation', module: 'Door', psr: '4', one: '4', Issues: 'RHR BSO Ding', Defect: 'Tool / Scuff Marks', Reference: 'H2022191', Initiated: '10-12-2022', Closed: '10-02-2023' },
    { funtion: 'Aesthetics', module: 'Rear Bumper', psr: '1', one: '3', Issues: 'LHR Door outer scratch', Defect: 'Sink / flow marks', Reference: 'H2022191', Initiated: '15-01-2023', Closed: '01-03-2023' },
    { funtion: 'Mutilation', module: 'Fuel Flap', psr: '3', one: '2', Issues: 'Roof rail - Sink marks / Waviness', Defect: 'Scratch', Reference: 'H2022191', Initiated: '10-12-2022', Closed: '10-02-2023' },
    { funtion: 'Aesthetics', module: 'Upper Trim', psr: '3', one: '1', Issues: 'Rear bumper contamination', Defect: 'Sink / flow marks', Reference: 'H2022191', Initiated: '15-01-2023', Closed: '01-03-2023' },
  ];


  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.filterForm = this.fb.group({
      Status: new FormControl(null),
      Keyword: new FormControl(null)
    });
  }


  ngOnInit() {
  }

  openPSRDialog(item) {
    let dialogRef = this.dialog.open(AddIssesComponent, {
      data: item,
      height: 'auto',
      width: '900px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
        //this.getAllClients();
      }
    });
  }

  openONEDialog(item) {
    let dialogRef = this.dialog.open(AddPsrPopComponent, {
      data: item,
      height: 'auto',
      width: '900px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
        //this.getAllClients();
      }
    });
  }

  openEditDialog(item?) {
    // let eventMasterId;
    // if (item)
    //   eventMasterId = 137
    // else
    //   eventMasterId = 134
    // let dialogRef = this.dialog.open(AddClosureMasterComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '600px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }



  clearFilter() {
    this.filterForm.reset();
  }

  // delete pop-up
  deleteConfirmation(item) {
    let eventMasterId;
    if (item)
      eventMasterId = 140
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }




  // Active/InActive Status
  Confirmation(item) {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Change Status', content: 'Are you sure you want to Change the Status ?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }

  // Active/InActive Status
  DocumentConfirmation(item) {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Change Status', content: 'Are you sure you want to Change the Status ?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }
}
