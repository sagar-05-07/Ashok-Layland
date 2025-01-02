import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-parts-pareto',
  templateUrl: './parts-pareto.component.html',
  styleUrls: ['./parts-pareto.component.scss']
})
export class PartsParetoComponent implements OnInit {

  @ViewChild('chartContainer', { static: false }) chartContainer: ElementRef;
  @ViewChild('chartContainer1', { static: false }) chartContainer1: ElementRef;
  @ViewChild('chartContainer2', { static: false }) chartContainer2: ElementRef;

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderPieChart();
    this.renderPieChart1();
    this.renderPieChart2();
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
            { name: 'CAT 1', y: 30, color: 'skyblue' },           // Red for "Open"
            { name: 'CAT 2', y: 50, color: 'green' }, // Yellow for "In Progress"
            { name: 'CAT 3', y: 20, color: 'red' },
            { name: 'CAT 4', y: 20, color: 'yellow' },
            { name: 'CAT 5', y: 20, color: 'blue' }         // Green for "Closed"
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
            { name: 'CAT 1', y: 30, color: 'skyblue' },           // Red for "Open"
            { name: 'CAT 2', y: 50, color: 'green' }, // Yellow for "In Progress"
            { name: 'CAT 3', y: 20, color: 'red' },
            { name: 'CAT 4', y: 20, color: 'yellow' },
            { name: 'CAT 5', y: 20, color: 'blue' }       // Green for "Closed"
          ]
        } as Highcharts.SeriesOptionsType
      ]
    };

    Highcharts.chart(this.chartContainer1.nativeElement, options);
  }

  renderPieChart2() {
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
            { name: 'Casting', y: 30, color: 'skyblue' },           // Red for "Open"
            { name: 'Forging', y: 50, color: 'green' }, // Yellow for "In Progress"
            { name: 'Machining', y: 20, color: 'red' },
            { name: 'Fasteners', y: 20, color: 'yellow' },
            { name: 'Non-Metallic', y: 20, color: 'blue' }         // Green for "Closed"
          ]
        } as Highcharts.SeriesOptionsType
      ]
    };

    Highcharts.chart(this.chartContainer2.nativeElement, options);
  }

  items = [
    { cat: 'Dimensional Checks', score: '12' },
    { cat: 'Surface Finish', score: '17' },
    { cat: 'Performance', score: '15' },
    { cat: 'Metallurgical', score: '8' },
    { cat: 'Mechanical', score: '5' }
  ];

  items1 = [
    { cat: 'Casting', score: '12' },
    { cat: 'Forging', score: '17' },
    { cat: 'Machining', score: '15' },
    { cat: 'Fasteners', score: '8' },
    { cat: 'Non-Metallic', score: '5' }
  ];



}
