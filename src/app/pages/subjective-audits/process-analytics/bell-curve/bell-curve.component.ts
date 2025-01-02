import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-bell-curve',
  templateUrl: './bell-curve.component.html',
  styleUrls: ['./bell-curve.component.scss']
})
export class BellCurveComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
    ;
  }


  chartOptions2 = {
    theme: "light2",
    title: {
      text: ""
    },
    animationEnabled: true,
    toolTip: {
      shared: true
    },
    legend: {
      horizontalAlign: "right",
      verticalAlign: "center",
      reversed: true
    },
    axisY: {
      includeZero: true
    },
    data: [
      {
        type: "stackedColumn",
        name: "Score",
        showInLegend: false,
        color: "skyblue",
        dataPoints: [
          { label: "0-10", y: 16 },
          { label: "10-20", y: 3 },
          { label: "20-30", y: 1 },
          { label: "30-40", y: 5 },
          { label: "40-50", y: 1 },
          { label: "50-60", y: 60 },
          { label: "60-70", y: 76 },
          { label: "70-80", y: 93 },
          { label: "80-90", y: 79 },
          { label: "90-100", y: 35 },
        ]
      }
    ]
  }


}
