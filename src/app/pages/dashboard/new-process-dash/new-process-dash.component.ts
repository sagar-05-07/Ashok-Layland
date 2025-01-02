import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-new-process-dash',
  templateUrl: './new-process-dash.component.html',
  styleUrls: ['./new-process-dash.component.scss']
})
export class NewProcessDashComponent implements OnInit {


  @ViewChild('chartContainer', { static: false }) chartContainer: ElementRef;

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderPieChart();
  }

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
            { name: 'Critical', y: 30, color: 'red' },           // Red for "Open"
            { name: 'Important', y: 50, color: 'green' }, // Yellow for "In Progress"
            { name: 'Others', y: 20, color: 'skyblue' }        // Green for "Closed"
          ]
        } as Highcharts.SeriesOptionsType
      ]
    };

    Highcharts.chart(this.chartContainer.nativeElement, options);
  }


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
        { label: "Critical", y: 2, color: "red" },
        { label: "Important", y: 13, color: "green" },
        { label: "Others", y: 6, color: "skyblue" }
      ]
    }]
  };

  values = [
    { cat: 'CAT 1', com: 25, critical: 5, important: 10, pending: 2, process: 3, closed: 15 },
    {
      cat: 'CAT 2',
      com: 18,  // Number of complaints
      critical: 12,
      important: 5,
      pending: 1,
      process: 4,
      closed: 20
    },
    {
      cat: 'CAT 3',
      com: 12,  // Number of complaints
      critical: 8,
      important: 7,
      pending: 0,
      process: 2,
      closed: 18
    },
    {
      cat: 'CAT 4',
      com: 5,   // Number of complaints
      critical: 1,
      important: 3,
      pending: 4,
      process: 1,
      closed: 10
    },
    {
      cat: 'CAT 5',
      com: 20,  // Number of complaints
      critical: 15,
      important: 2,
      pending: 0,
      process: 1,
      closed: 30
    },
    {
      cat: 'CAT 6',
      com: 10,  // Number of complaints
      critical: 0,
      important: 4,
      pending: 2,
      process: 1,
      closed: 8
    }
  ];

  getTotal(field: string): number {
    return this.values.reduce((acc, item) => acc + item[field], 0);
  }

  testSelected = true;
  CSelected = false;

  mainMenu(selected: string) {
    if (selected === 'testSelected') {
      this.testSelected = true;
      this.CSelected = false; // Ensure CSelected is false
      this.chartOptions2 = this.chartOptions2;
    } else if (selected === 'CSelected') {
      this.testSelected = false; // Ensure testSelected is false
      this.CSelected = true;
    }
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
        name: "Critical",
        showInLegend: true,
        dataPoints: [
          { label: "CAT 1", y: 16 },
          { label: "CAT 2", y: 3 },
          { label: "CAT 3", y: 1 },
          { label: "CAT 4", y: 5 },
          { label: "CAT 5", y: 1 },
          { label: "CAT 6", y: 0 },
        ]
      },
      {
        type: "stackedColumn",
        name: "Important",
        showInLegend: true,
        dataPoints: [
          { label: "CAT 1", y: 3 },
          { label: "CAT 2", y: 2 },
          { label: "CAT 3", y: 1 },
          { label: "CAT 4", y: 5 },
          { label: "CAT 5", y: 3 },
          { label: "CAT 6", y: 0 },
        ]
      },
      {
        type: "stackedColumn",
        name: "Others",
        showInLegend: true,
        dataPoints: [
          { label: "CAT 1", y: 9 },
          { label: "CAT 2", y: 3 },
          { label: "CAT 3", y: 0 },
          { label: "CAT 4", y: 0 },
          { label: "CAT 5", y: 1 },
          { label: "CAT 6", y: 1 },
        ]
      }
    ]
  }

  chartOptions3 = {
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
        name: "Process",
        showInLegend: true,
        dataPoints: [
          { label: "CAT 1", y: 16 },
          { label: "CAT 2", y: 3 },
          { label: "CAT 3", y: 1 },
          { label: "CAT 4", y: 5 },
          { label: "CAT 5", y: 1 },
          { label: "CAT 6", y: 0 },
        ]
      },
      {
        type: "stackedColumn",
        name: "Pending",
        showInLegend: true,
        dataPoints: [
          { label: "CAT 1", y: 3 },
          { label: "CAT 2", y: 2 },
          { label: "CAT 3", y: 1 },
          { label: "CAT 4", y: 5 },
          { label: "CAT 5", y: 3 },
          { label: "CAT 6", y: 0 },
        ]
      },

    ]
  }

}
