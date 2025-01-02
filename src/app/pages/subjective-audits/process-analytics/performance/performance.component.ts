import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {


  @ViewChild('chartContainer', { static: false }) chartContainer: ElementRef;
  @ViewChild('chartContainer1', { static: false }) chartContainer1: ElementRef;

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
        name: "Excellent",
        showInLegend: true,
        dataPoints: [
          { label: "Supplier 1", y: 16 },
          { label: "Supplier 2", y: 3 },
          { label: "Supplier 3", y: 1 },
          { label: "Supplier 4", y: 5 },
          { label: "Supplier 5", y: 1 },
          { label: "Supplier 6", y: 0 },
          { label: "Supplier 7", y: 16 },
          { label: "Supplier 8", y: 3 },
          { label: "Supplier 9", y: 1 },
          { label: "Supplier 10", y: 5 },
        ]
      }
    ]
  }

  items = [
    { rating: 'Excellent', per: 95 },
    { rating: 'Good', per: 75 },
    { rating: 'Average', per: 65 },
    { rating: 'Poor', per: 45 }
  ];

  items1 = [
    { rating: 'Supplier A', per: 92 },
    { rating: 'Supplier B', per: 87 },
    { rating: 'Supplier C', per: 78 },
    { rating: 'Supplier D', per: 85 },
    { rating: 'Supplier E', per: 90 },
    { rating: 'Supplier F', per: 76 },
    { rating: 'Supplier G', per: 80 },
    { rating: 'Supplier H', per: 88 },
    { rating: 'Supplier I', per: 95 },
    { rating: 'Supplier J', per: 82 }
  ];


  ngAfterViewInit(): void {
    this.renderPieChart();
    this.renderPieChart1();
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
          name: 'Supplier Score',
          colorByPoint: true,
          type: 'pie', // Specify the chart type
          data: [
            { name: 'Excellent', y: 52, color: 'red' },
            { name: 'Good', y: 37, color: 'green' },
            { name: 'Average', y: 28, color: 'orange' },
            { name: 'Poor', y: 15, color: 'blue' },
          ]
        } as Highcharts.SeriesOptionsType
      ]
    };

    Highcharts.chart(this.chartContainer.nativeElement, options);
  }


  renderPieChart1() {
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
            { name: 'Supplier A', y: 12, color: 'red' },
            { name: 'Supplier B', y: 67, color: 'green' },
            { name: 'Supplier C', y: 18, color: 'orange' },
            { name: 'Supplier D', y: 15, color: 'blue' },
            { name: 'Supplier E', y: 90, color: 'yellow' },
            { name: 'Supplier F', y: 76, color: 'purple' },
            { name: 'Supplier G', y: 60, color: 'pink' },
            { name: 'Supplier H', y: 88, color: 'teal' },
            { name: 'Supplier I', y: 45, color: 'cyan' },
            { name: 'Supplier J', y: 82, color: 'magenta' }
          ]
        } as Highcharts.SeriesOptionsType
      ]
    };

    Highcharts.chart(this.chartContainer1.nativeElement, options);
  }



}
