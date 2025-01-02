import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-parts-family-dash',
  templateUrl: './parts-family-dash.component.html',
  styleUrls: ['./parts-family-dash.component.scss']
})
export class PartsFamilyDashComponent implements OnInit {

  @ViewChild('chartContainer', { static: false }) chartContainer: ElementRef;
  @ViewChild('chartContainer1', { static: false }) chartContainer1: ElementRef;

  constructor() { }


  ngOnInit(): void {
  }

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
            { name: 'Pending', y: 30, color: 'skyblue' },           // Red for "Open"
            { name: 'Process', y: 50, color: 'green' }, // Yellow for "In Progress"
            { name: 'Closed', y: 20, color: 'red' }        // Green for "Closed"
          ]
        } as Highcharts.SeriesOptionsType
      ]
    };

    Highcharts.chart(this.chartContainer1.nativeElement, options);
  }

  items = [
    { critical: 30, important: 45, others: 25, commodity: 'Casting' },
    { critical: 40, important: 35, others: 25, commodity: 'Forging' },
    { critical: 35, important: 40, others: 25, commodity: 'Machining' },
    { critical: 50, important: 30, others: 20, commodity: 'Fasteners' },
    { critical: 30, important: 45, others: 25, commodity: 'Non-Metallic' },
    { critical: 40, important: 35, others: 25, commodity: 'Sheet Metal' },
  ];
  items1 = [
    { rating: 'Pending', per: '40' },
    { rating: 'Process', per: '40' },
    { rating: 'Closed', per: '40' },
  ]

  isChecked1: string = 'no';
  isChecked2: string = 'yes';
  isChecked3: string = 'yes';
  isChecked4: string = 'yes';
  isChecked5: string = 'yes';
  isChecked6: string = 'yes';
  isChecked7: string = 'yes';
  isChecked8: string = 'yes';

  color1() {
    this.isChecked1 = 'no'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'yes'
    this.isChecked5 = 'yes'
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
  }

  color2() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'no'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'yes'
    this.isChecked5 = 'yes'
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
  }
  color3() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'no'
    this.isChecked4 = 'yes'
    this.isChecked5 = 'yes'
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
  }
  color4() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'no'
    this.isChecked5 = 'yes'
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
  }
  color5() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'yes'
    this.isChecked5 = 'no'
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
  }

  color6() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'yes'
    this.isChecked5 = 'yes'
    this.isChecked6 = 'no'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
  }
  color7() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'yes'
    this.isChecked5 = 'yes'
    this.isChecked6 = 'yes'
    this.isChecked7 = 'no'
    this.isChecked8 = 'yes'
  }
  color8() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'yes'
    this.isChecked5 = 'yes'
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'no'
  }
}
