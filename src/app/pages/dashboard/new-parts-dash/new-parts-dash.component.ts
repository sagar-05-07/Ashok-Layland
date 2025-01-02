import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-new-parts-dash',
  templateUrl: './new-parts-dash.component.html',
  styleUrls: ['./new-parts-dash.component.scss']
})
export class NewPartsDashComponent implements OnInit {


  @ViewChild('chartContainer', { static: false }) chartContainer: ElementRef;
  @ViewChild('chartContainer', { static: false }) chartContainer1: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderPieChart();
  }

  view: [number, number] = [750, 400];

  // Define colors
  colorScheme = {
    domain: ['#1f77b4', '#00ff00']
  };

  // Sample data
  multi = [
    {
      "name": "Cum Plan",
      "series": [
        { "name": "Apr'24", "value": 0 },
        { "name": "May'24", "value": 50 },
        { "name": "Jun'24", "value": 150 },
        { "name": "Jul'24", "value": 400 },
        { "name": "Aug'24", "value": 750 },
        { "name": "Sep'24", "value": 1000 },
        { "name": "Oct'24", "value": 1250 },
        { "name": "Nov'24", "value": 1500 },
        { "name": "Dec'24", "value": 1750 },
        { "name": "Jan'25", "value": 2000 },
        { "name": "Feb'25", "value": 2300 },
        { "name": "Mar'25", "value": 2635 }
      ]
    },
    {
      "name": "Cum Actual",
      "series": [
        { "name": "Apr'24", "value": 0 },
        { "name": "May'24", "value": 0 },
        { "name": "Jun'24", "value": 40 },
        { "name": "Jul'24", "value": 135 },
        { "name": "Aug'24", "value": 272 },
        { "name": "Sep'24", "value": 393 }
      ]
    }
  ];


  chartOptions = {
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
    data: [{
      type: "stackedColumn",
      name: "C",
      showInLegend: false,
      dataPoints: [
        { label: "Open", y: 2, color: "red" },         // Red for Open
        { label: "In Progress", y: 13, color: "yellow" }, // Yellow for In Progress
        { label: "Closed", y: 6, color: "green" }      // Green for Closed
      ]
    }]
  };

  chartOptions1 = {
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
    data: [{
      type: "stackedColumn",
      name: "C",
      showInLegend: false,
      dataPoints: [
        { label: "Man", y: 200, color: "skyblue" },         // Red for Open
        { label: "Method", y: 250, color: "skyblue" }, // Yellow for In Progress
        { label: "Machine", y: 106, color: "skyblue" },
        { label: "Measurement", y: 130, color: "skyblue" }, // Yellow for In Progress
        { label: "Total", y: 86, color: "skyblue" }       // Green for Closed
      ]
    }]
  };

  renderPieChart() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: '',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          size: '70%',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f}%'
          }
        }
      },
      series: [
        {
          name: 'Status',
          colorByPoint: true,
          type: 'pie', // Specify the chart type
          data: [
            { name: 'Open', y: 30, color: 'red' },           // Red for "Open"
            { name: 'In Progress', y: 50, color: 'yellow' }, // Yellow for "In Progress"
            { name: 'Closed', y: 20, color: 'green' }        // Green for "Closed"
          ]
        } as Highcharts.SeriesOptionsType
      ]
    };

    Highcharts.chart(this.chartContainer.nativeElement, options);
  }


  values = [
    { vertical: 'CFM', partsChecked: 159, r: 109, y: 50, g: 0, partFoundNg: 66, partsCorrectedOk: 9, totalParameter: 9892, safetyOk: 249, safetyNotOk: 12, criticalOk: 230, criticalNotOk: 12, importantOk: 757, importantNotOk: 38, fitmentOk: 724, fitmentNotOk: 10, otherOk: 7605, otherNotOk: 255, awaitingOk: 206, tbr: 129 },
    { vertical: 'Non metallic', partsChecked: 250, r: 156, y: 92, g: 2, partFoundNg: 80, partsCorrectedOk: 25, totalParameter: 7702, safetyOk: 19, safetyNotOk: 0, criticalOk: 24, criticalNotOk: 1, importantOk: 165, importantNotOk: 5, fitmentOk: 2300, fitmentNotOk: 146, otherOk: 4891, otherNotOk: 151, awaitingOk: 292, tbr: 175 },
    // Add more rows as needed
  ];

  // Function to calculate total of a column
  getTotal(column: string): number {
    return this.values.reduce((acc, item) => acc + item[column], 0);
  }


  values1 = [
    { vertical: 'Venugopal', partsChecked: 159, r: 109, y: 50, g: 0, partFoundNg: 66, partsCorrectedOk: 9, totalParameter: 9892, safetyOk: 249, safetyNotOk: 12, criticalOk: 230, criticalNotOk: 12, importantOk: 757, importantNotOk: 38, fitmentOk: 724, fitmentNotOk: 10, otherOk: 7605, otherNotOk: 255, awaitingOk: 206, tbr: 129 },
    { vertical: 'Maqsood', partsChecked: 250, r: 156, y: 92, g: 2, partFoundNg: 80, partsCorrectedOk: 25, totalParameter: 7702, safetyOk: 19, safetyNotOk: 0, criticalOk: 24, criticalNotOk: 1, importantOk: 165, importantNotOk: 5, fitmentOk: 2300, fitmentNotOk: 146, otherOk: 4891, otherNotOk: 151, awaitingOk: 292, tbr: 175 },
    { vertical: 'Bhojane', partsChecked: 159, r: 109, y: 50, g: 0, partFoundNg: 66, partsCorrectedOk: 9, totalParameter: 9892, safetyOk: 249, safetyNotOk: 12, criticalOk: 230, criticalNotOk: 12, importantOk: 757, importantNotOk: 38, fitmentOk: 724, fitmentNotOk: 10, otherOk: 7605, otherNotOk: 255, awaitingOk: 206, tbr: 129 },
    { vertical: 'Aravind Kumar', partsChecked: 250, r: 156, y: 92, g: 2, partFoundNg: 80, partsCorrectedOk: 25, totalParameter: 7702, safetyOk: 19, safetyNotOk: 0, criticalOk: 24, criticalNotOk: 1, importantOk: 165, importantNotOk: 5, fitmentOk: 2300, fitmentNotOk: 146, otherOk: 4891, otherNotOk: 151, awaitingOk: 292, tbr: 175 },
    { vertical: 'Nagaraj.S-TPE ', partsChecked: 159, r: 109, y: 50, g: 0, partFoundNg: 66, partsCorrectedOk: 9, totalParameter: 9892, safetyOk: 249, safetyNotOk: 12, criticalOk: 230, criticalNotOk: 12, importantOk: 757, importantNotOk: 38, fitmentOk: 724, fitmentNotOk: 10, otherOk: 7605, otherNotOk: 255, awaitingOk: 206, tbr: 129 },
    { vertical: 'Srinivasan-TPE', partsChecked: 250, r: 156, y: 92, g: 2, partFoundNg: 80, partsCorrectedOk: 25, totalParameter: 7702, safetyOk: 19, safetyNotOk: 0, criticalOk: 24, criticalNotOk: 1, importantOk: 165, importantNotOk: 5, fitmentOk: 2300, fitmentNotOk: 146, otherOk: 4891, otherNotOk: 151, awaitingOk: 292, tbr: 175 },

  ];

  // Function to calculate total of a column
  getTotal1(column: string): number {
    return this.values1.reduce((acc, item) => acc + item[column], 0);
  }



}
