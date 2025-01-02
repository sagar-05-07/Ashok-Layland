import { Component, OnInit } from '@angular/core';
import { PopPieChartComponent } from '../pop-pie-chart/pop-pie-chart.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-process-dashboard',
  templateUrl: './process-dashboard.component.html',
  styleUrls: ['./process-dashboard.component.scss']
})
export class ProcessDashboardComponent implements OnInit {


  // Bar chart
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  // single: any[];
  view: any[] = [160, 120];
  view1: any[] = [160, 100];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';

  colorScheme = {
    domain: ['red', 'green', 'blue']
  };

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  isChecked1: string = 'no';
  isChecked2: string = 'yes';

  color1() {
    this.isChecked1 = 'no'
    this.isChecked2 = 'yes'
  }

  color2() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'no'
  }

  single = [
    {
      "name": "Process",
      "value": 50
    },
    {
      "name": "SQA",
      "value": 85
    },
    {
      "name": "PE",
      "value": 97
    },
    {
      "name": "Paint",
      "value": 50
    },
    {
      "name": "Body",
      "value": 97
    },

  ];

  multi = [
    {
      "name": "Interior",
      "value": 50
    },
    {
      "name": "Exterior",
      "value": 85
    },
    {
      "name": "Overall",
      "value": 97
    },


  ];

  piechartpop(item) {
    this.dialog.open(PopPieChartComponent, {
      data: item,
      width: "1150px",
      height: "550px"
    })
  }

}

