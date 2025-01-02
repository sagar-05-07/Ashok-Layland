import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @ViewChild('chartContainer', { static: false }) chartContainer: ElementRef;

  constructor() { }

  ngOnInit(): void {
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
        name: "Distribution",
        showInLegend: false,
        dataPoints: [
          { label: "March", y: 86 },
          { label: "April", y: 82 },
          { label: "May", y: 68 },
          { label: "June", y: 70 },
          { label: "July", y: 90 },
          { label: "August", y: 83 },
          { label: "September", y: 79 },
          { label: "October", y: 71 },
          { label: "November", y: 63 },
          { label: "December", y: 79 },
          { label: "January", y: 91 },
          { label: "Ferbary", y: 62 },
        ]
      }
    ]
  };


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
      horizontalAlign: "right",  // Keep the legend on the right
      verticalAlign: "center",
      reversed: true
    },
    axisY: {
      includeZero: true
    },
    data: [
      {
        type: "column",  // Changed from "stackedColumn" to "column"
        name: "Log",
        showInLegend: true,
        dataPoints: [
          { label: "March", y: 86 },
          { label: "April", y: 82 },
          { label: "May", y: 68 },
          { label: "June", y: 70 },
          { label: "July", y: 90 },
          { label: "August", y: 83 },
          { label: "September", y: 79 },
          { label: "October", y: 71 },
          { label: "November", y: 63 },
          { label: "December", y: 79 },
          { label: "January", y: 91 },
          { label: "Ferbary", y: 62 },
        ]
      },
      {
        type: "column",  // Keep both series as "column"
        name: "Resolved",
        showInLegend: true,
        dataPoints: [
          { label: "March", y: 40 },
          { label: "April", y: 35 },
          { label: "May", y: 92 },
          { label: "June", y: 78 },
          { label: "July", y: 42 },
          { label: "August", y: 27 },
          { label: "September", y: 50 },
          { label: "October", y: 46 },
          { label: "November", y: 71 },
          { label: "December", y: 58 },
          { label: "January", y: 89 },
          { label: "February", y: 54 },
        ]
      }
    ]
  };

  items = [
    { period: '0-10', action: '20%' },
    { period: '10-20', action: '30%' },
    { period: '20-30', action: '40%' },
    { period: '30-40', action: '50%' },
    { period: '40-50', action: '60%' },
    { period: '50-100', action: '70%' },
    { period: '100+', action: '80%' },
  ];


  ngAfterViewInit(): void {
    this.renderPieChart();
    // this.renderPieChart1();
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
            { name: '0-10', y: 20, color: 'red' },
            { name: '10-20', y: 30, color: 'green' },
            { name: '20-30', y: 40, color: 'skyblue' },
            { name: '30-40', y: 50, color: 'orange' },
            { name: '40-50', y: 60, color: 'purple' },
            { name: '50-100', y: 70, color: 'yellow' },
            { name: '100+', y: 80, color: 'blue' }
          ]
        } as Highcharts.SeriesOptionsType
      ]
    };

    Highcharts.chart(this.chartContainer.nativeElement, options);
  }



}
