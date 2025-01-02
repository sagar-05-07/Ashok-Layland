import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

/* Importing the highcharts-more module. */
declare var require: any;
/* Importing the highcharts-more module. */
const More = require('highcharts/highcharts-more');
More(Highcharts);

/* Importing the exporting module. */
const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

/* Importing the export-data module. */
const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

/* Importing the accessibility module. */
const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-parts-sactter',
  templateUrl: './parts-sactter.component.html',
  styleUrls: ['./parts-sactter.component.scss']
})
export class PartsSactterComponent implements OnInit {

  public options: any = {
    chart: {
      type: 'scatter',
      zoomType: null
    },
    accessibility: {
      description: '',
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Day of the Month'
      },
      min: 1,
      max: 31,
      tickInterval: 1,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Score'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
      borderWidth: 1
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)'
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: 'Day {point.x}, Score {point.y}'
        }
      }
    },
    series: [{
      name: 'Score',
      color: 'rgba(119, 152, 191, .5)',
      data: [
        [1, 72], [2, 78], [3, 80], [4, 85], [5, 88], [6, 76], [7, 83],
        [8, 90], [9, 82], [10, 86], [11, 79], [12, 84], [13, 91], [14, 75],
        [15, 89], [16, 77], [17, 81], [18, 93], [19, 85], [20, 88], [21, 74],
        [22, 79], [23, 87], [24, 82], [25, 90], [26, 80], [27, 84], [28, 76],
        [29, 83], [30, 92], [31, 86]
      ]
    }]
  };

  constructor() { }

  ngOnInit(): void {
    const chart = Highcharts.chart('container', this.options);
    chart.reflow();  // Ensure the chart resizes properly and displays all data points
  }

}
