import { AddAlertEscalationComponent } from './add-alert-escalation/add-alert-escalation.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { admindata } from '../admindata';

@Component({
  selector: 'app-escalation',
  templateUrl: './escalation.component.html',
  styleUrls: ['./escalation.component.scss']
})
export class EscalationComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.values = admindata.escalation();
    }
    else {

    }
  }
  values = [

  ]


  addchecklistaudit() {
    let dialogRef = this.dialog.open(AddAlertEscalationComponent, {

      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });

  }
}
