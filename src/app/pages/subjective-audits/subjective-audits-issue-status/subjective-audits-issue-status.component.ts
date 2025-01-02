import { AddSubjectiveAuditComponent } from './add-subjective-audit/add-subjective-audit.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ProcessGridviewComponent } from './add-subjective-audit/process-gridview/process-gridview.component';

@Component({
  selector: 'app-subjective-audits-issue-status',
  templateUrl: './subjective-audits-issue-status.component.html',
  styleUrls: ['./subjective-audits-issue-status.component.scss']
})
export class SubjectiveAuditsIssueStatusComponent implements OnInit {

  // Subjective Audit
  filterToggle = false;
  values = []


  public single: any[];
  public multi: any[];
  public triple: any[];
  public showLegend = false;
  public gradient = false;
  allClients: any[];
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  color = 'accent';
  checked = true;
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  constructor(
    public dialog: MatDialog,
  ) {
    const single = [
      {
        name: 'Casting',
        value: 40
      },
      {
        name: 'Forging',
        value: 49
      },
      {
        name: 'Machining',
        value: 36
      },
      {
        name: 'Fasteners',
        value: 52
      },
      {
        name: 'Non-Metallic',
        value: 27
      },
      {
        name: 'Sheet Metal',
        value: 10
      }
    ];
    const multi = [
      {
        name: 'Ramesh Kumar',
        value: 45
      },
      {
        name: 'Suresh Singh',
        value: 70
      },
      {
        name: 'Sagar Kumar',
        value: 94
      },
      {
        name: 'Mahesh Kumar Singh',
        value: 64
      },
    ];
    const triple = [
      {
        name: 'Hold',
        value: 45
      },
      {
        name: 'WIP',
        value: 70
      },
      {
        name: 'Completed',
        value: 94
      },
      {
        name: 'Pending',
        value: 64
      },
    ];
    // this.settings = this.appSettings.settings; 
    Object.assign(this, { single, multi, triple });
  }


  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  statusOptions = [
    { value: 0, name: 'Initiated', colorCode: '#00ff0040' },
    { value: 1, name: 'Awarded', colorCode: '#C0C0C0' },
    { value: 2, name: 'In Process', colorCode: '#87CEFA' },
    { value: 3, name: 'On Hold', colorCode: '#FFA50069' },
    { value: 4, name: 'complete', colorCode: 'red' },
  ]

  values1 = [
    {
      auditReference: '2024/Process/254871',
      commodityCasting: 'Engine Block',
      location: 'Chennai',
      supplier: 'ABC Castings Pvt Ltd',
      auditor: 'Vijay Mohan',
      auditDate: '12-09-2024',
      issues: 4,
      capa: 2,
      score: 87,
      stageColour: 'lightgreen',
      status: 'Complete',
      done: true
    },
    {
      auditReference: '2024/Process/254832',
      commodityCasting: 'Transmission Case',
      location: 'Pune',
      supplier: 'XYZ Industries Ltd',
      auditor: 'Arjun Sharma',
      auditDate: '05-09-2024',
      issues: 5,
      capa: 3,
      score: 80,
      stageColour: 'lightyellow',
      status: 'Pending',
      done: false
    },
    {
      auditReference: '2024/Process/254812',
      commodityCasting: 'Cylinder Head',
      location: 'Bangalore',
      supplier: 'LMN Castings Co',
      auditor: 'Radhika Iyer',
      auditDate: '22-08-2024',
      issues: 3,
      capa: 1,
      score: 90,
      stageColour: 'lightblue',
      status: 'In Progress',
      done: false
    },
    {
      auditReference: '2024/Process/254854',
      commodityCasting: 'Crankshaft',
      location: 'Hyderabad',
      supplier: 'PQR Castings Ltd',
      auditor: 'Siva Kumar',
      auditDate: '30-07-2024',
      issues: 6,
      capa: 4,
      score: 75,
      stageColour: 'lightcoral',
      status: 'Delayed',
      done: false
    },
    {
      auditReference: '2024/Process/254865',
      commodityCasting: 'Camshaft',
      location: 'Mumbai',
      supplier: 'DEF Automotive Ltd',
      auditor: 'Manoj Singh',
      auditDate: '15-07-2024',
      issues: 2,
      capa: 0,
      score: 95,
      stageColour: 'lightgreen',
      status: 'Complete',
      done: true
    }
  ];


  opendashboard() {
    window.open('/#/app/checklistdoard');
  }

  opendashboard1() {
    window.open('/#/app/actions');
  }

  openprocessdashboard() {
    window.open('/#/app/process-dashboard');
  }
  // opendashboard() {
  //   window.open('../demerit');
  // }

  ///#/app/parameterboard has been changed to /app/checklistdoard

  addgrid() {
    // this.dialog.open(ManageGridComponent,{
    //   width:"600px",
    //   height:"auto"
    // })
  }
  // addParameter(){
  //   this.dialog.open(AddparameterauditComponent,{
  //     width:"600px",
  //     height:"auto"
  //   })
  // }
  addParameter(auditdata) {
    let dialogRef = this.dialog.open(AddSubjectiveAuditComponent, {
      data: auditdata,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  gridview(auditdata) {
    let dialogRef = this.dialog.open(ProcessGridviewComponent, {
      data: auditdata,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

}
