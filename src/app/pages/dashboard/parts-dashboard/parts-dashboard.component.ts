import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-parts-dashboard',
  templateUrl: './parts-dashboard.component.html',
  styleUrls: ['./parts-dashboard.component.scss']
})
export class PartsDashboardComponent implements OnInit {

  chart: any;

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
      showInLegend: true,
      dataPoints: [
        { label: "", y: 2 },
        { label: "", y: 13 },
        { label: "Percieved Quality", y: 16 },
        { label: "", y: 2 },
        { label: "Regulation/Govt.", y: 0 },
        { label: "Safety", y: 0 },
        { label: "Service", y: 0 }
      ]
    }, {
      type: "stackedColumn",
      name: "R2",
      showInLegend: true,
      dataPoints: [
        { label: "", y: 0 },
        { label: "", y: 5 },
        { label: "Percieved Quality", y: 1 },
        { label: "", y: 4 },
        { label: "Regulation/Govt.", y: 0 },
        { label: "Safety", y: 3 },
        { label: "Service", y: 1 }
      ]
    }, {
      type: "stackedColumn",
      name: "R1",
      showInLegend: true,
      dataPoints: [
        { label: "Assembly", y: 5 },
        { label: "Function", y: 8 },
        { label: "Percieved Quality", y: 0 },
        { label: "]=", y: 0 },
        { label: "/Govt.", y: 0 },
        { label: "Safety", y: 1 },
        { label: "", y: 1 }
      ]
    },
    {
      type: "stackedColumn",
      name: "O",
      showInLegend: true,
      dataPoints: [
        { label: "Oceanic Oasis", y: 0 },
        { label: "Coastal Currents", y: 3 },
        { label: "Aqua Bliss", y: 7 },
        { label: "Oceanic Oasis", y: 5 },
        { label: "Coastal Currents", y: 3 },
        { label: "Oceanic Oasis", y: 2 },
        { label: "Dr. Reddy", y: 0 }
      ]
    },]
  }
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
    data: [
      {
        type: "stackedColumn",
        name: "O",
        showInLegend: true,
        dataPoints: [
          { label: "shhh", y: 11 },
          { label: "Electrical", y: 0 },
          { label: "Transmission", y: 0 },
          { label: "Hydraulics", y: 2 },
          { label: "Engine", y: 4 },
          { label: "IQC", y: 0 },
          { label: "VQC", y: 0 },
          { label: "Cabin", y: 3 },
          { label: "Loader", y: 0 }
        ]
      },
      {
        type: "stackedColumn",
        name: "R1",
        showInLegend: true,
        dataPoints: [
          { label: "Vehicle", y: 9 },
          { label: "Electrical", y: 3 },
          { label: "Transmission", y: 0 },
          { label: "Hydraulics", y: 0 },
          { label: "Engine", y: 1 },
          { label: "IQC", y: 1 },
          { label: "VQC", y: 2 },
          { label: "Cabin", y: 0 },
          { label: "Loader", y: 1 }
        ]
      }, {
        type: "stackedColumn",
        name: "R2",
        showInLegend: true,
        dataPoints: [
          { label: "Vehicle", y: 3 },
          { label: "Electrical", y: 2 },
          { label: "Transmission", y: 1 },
          { label: "Hydraulics", y: 5 },
          { label: "Engine", y: 3 },
          { label: "IQC", y: 0 },
          { label: "VQC", y: 3 },
          { label: "Cabin", y: 0 },
          { label: "Loader", y: 0 }
        ]
      },

      {
        type: "stackedColumn",
        name: "C",
        showInLegend: true,
        dataPoints: [
          { label: "JWIL Infra Limited", y: 16 },
          { label: "JWIL Holding Private Limited", y: 3 },
          { label: "JWIL Services Limited", y: 1 },
          { label: "JWIL Infra Limited", y: 5 },
          { label: "JWIL Urban Infrastructure Limited", y: 1 },
          { label: "JWIL Urban Infrastructure Limited", y: 0 },
          { label: "JWIL Infra Limited", y: 0 },
          { label: "JWIL Services Limited", y: 3 },
          { label: "JWIL Infra Limited", y: 1 }
        ]
      },
    ]
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
        name: "C",
        showInLegend: true,
        dataPoints: [
          { label: "<200", y: 16 },
          { label: "201-400", y: 3 },
          { label: "401-600", y: 1 },
          { label: "601-800", y: 5 },
          { label: "801-100", y: 1 },
          { label: "1000+", y: 0 },
        ]
      },
      {
        type: "stackedColumn",
        name: "R2",
        showInLegend: true,
        dataPoints: [
          { label: "<200", y: 3 },
          { label: "201-400", y: 2 },
          { label: "401-600", y: 1 },
          { label: "601-800", y: 5 },
          { label: "801-100", y: 3 },
          { label: "1000+", y: 0 },
        ]
      },
      {
        type: "stackedColumn",
        name: "R1",
        showInLegend: true,
        dataPoints: [
          { label: "<200", y: 9 },
          { label: "201-400", y: 3 },
          { label: "401-600", y: 0 },
          { label: "601-800", y: 0 },
          { label: "801-1000", y: 1 },
          { label: "1000+", y: 1 },
        ]
      },
      {
        type: "stackedColumn",
        name: "O",
        showInLegend: true,
        dataPoints: [
          { label: "<200", y: 11 },
          { label: "201-400", y: 0 },
          { label: "401-600", y: 0 },
          { label: "601-800", y: 2 },
          { label: "801-1000", y: 4 },
          { label: "1000+", y: 0 },
        ]
      },

    ]
  }

  totalSize: 0;
  currentPage: 0;
  pageSize: 0;
  filterToggle: boolean = false;
  filterForm: FormGroup;
  testSelected = true
  CSelected = false;

  R2Selected = false;
  R1Selected = false;
  OSelected = false;
  Total = false;



  NCSelected = false;

  NR2Selected = false;
  NR1Selected = false;
  NOSelected = false;
  NtestSelected = true
  NTotal = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };

  @ViewChild('chartContainer', { static: false }) chartContainer: ElementRef;
  @ViewChild('chartContainer1', { static: false }) chartContainer1: ElementRef;
  @ViewChild('chartContainer2', { static: false }) chartContainer2: ElementRef;
  @ViewChild('chartContainer3', { static: false }) chartContainer3: ElementRef;
  @ViewChild('chartContainer4', { static: false }) chartContainer4: ElementRef;

  constructor(public dialog: MatDialog, public router: Router) { }

  ngAfterViewInit(): void {
    this.AgengingAnalysis();
    this.renderPieChart();
    this.renderPieChart6();
  }

  clearFilter() { }
  filter() { }

  ngOnInit(): void { }
  values = [
    { category: "Aqua Bliss", c: "2", r2: "", r1: "5", o: "", total: "2" },
    { category: "Coastal Currents", c: "13", r2: "5", r1: "8", o: "3", total: "26" },
    { category: "Oceanic Oasis", c: "16", r2: "1", r1: "", o: "7", total: "32" },
    { category: "Aqua Bliss", c: "2", r2: "4", r1: "", o: "5", total: "11" },
    { category: "Dr. Reddy's", c: "", r2: "", r1: "", o: "3", total: "3" },
    { category: "Oceanic Oasis", c: "", r2: "3", r1: "1", o: "2", total: "6" },
    { category: "Aqua Bliss", c: "", r2: "1", r1: "1", o: "", total: "2" },
  ];
  values2 = [
    { period: "0-3", issues: "15" },
    { period: "4-10", issues: "12" },
    { period: "10-20", issues: "12" },
    { period: "20-30", issues: "07" },
    { period: "30-60", issues: "05" },
    { period: "60-90", issues: "15" },
    { period: "90+ Days", issues: "30" },
  ]

  values1 = [
    { category: "JWIL Infra Limited", c: "11", r2: "9", r1: "3", o: "16", total: "39" },
    { category: "JWIL Services Limited", c: "0", r2: "3", r1: "2", o: "3", total: "8" },
    { category: "JWIL Holding Private Limited", c: "0", r2: "0", r1: "1", o: "1", total: "2" },
    { category: "JWIL Infra Limited", c: "2", r2: "1", r1: "5", o: "5", total: "16" },
    { category: "JWIL Holding Private Limited", c: "4", r2: "1", r1: "3", o: "1", total: "9" },
    { category: "JWIL Services Limited", c: "0", r2: "0", r1: "0", o: "0", total: "0" },
    { category: "JWIL Infra Limited", c: "3", r2: "0", r1: "2", o: "0", total: "0" },
    { category: "JWIL Urban Infrastructure Limited", c: "3", r2: "1", r1: "0", o: "3", total: "7" },
    { category: "JWIL Services Limited", c: "0", r2: "0", r1: "0", o: "1", total: "1" },
    { category: "JWIL Infra Limited", c: "20", r2: "15", r1: "14", o: "33", total: "82" },
  ];

  values3 = [
    { category: "<200", c: "11", r2: "9", r1: "3", o: "16", total: "39" },
    { category: "201-400", c: "0", r2: "3", r1: "2", o: "3", total: "8" },
    { category: "401-600", c: "0", r2: "0", r1: "1", o: "1", total: "2" },
    { category: "601-800", c: "2", r2: "1", r1: "5", o: "5", total: "16" },
    { category: "801-1000", c: "4", r2: "1", r1: "3", o: "1", total: "9" },
    { category: "1000+", c: "0", r2: "0", r1: "0", o: "0", total: "0" },
    { category: "Total", c: "20", r2: "15", r1: "14", o: "33", total: "82" },
  ];

  callPie() {
    this.renderPieChart()
  }
  // callPietest(){
  //   this.createHighchartsChart()
  // }
  callPie2() {
    this.renderPieChart2()
  }
  callPie3() {
    this.renderPieChart3()
  }
  callPie4() {
    this.renderPieChart4()
  }
  callPie5() {
    this.renderPieChart5()
  }




  callPie6() {
    this.renderPieChart6()
  }
  callPie7() {
    this.renderPieChart7()
  }
  callPie8() {
    this.renderPieChart8()
  }
  callPie9() {
    this.renderPieChart9()
  }
  callPie10() {
    this.renderPieChart10()
  }

  callPie11() {
    this.renderPieChart11()
  }
  callPie12() {
    this.renderPieChart12()
  }
  callPie13() {
    this.renderPieChart13()
  }
  callPie14() {
    this.renderPieChart14()
  }
  callPie15() {
    this.renderPieChart15()
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
        text: 'Category : C',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: 'Oceanic Oasis', y: 2.67, },
            { name: 'Coastal Currents', y: 13.77 },
            { name: 'Aqua Bliss', y: 16.907 },
            { name: 'Dr. Reddy', y: 2.907 },
            { name: 'Aqua Bliss', y: 0.00 },
            { name: 'Coastal Currents', y: 0.001 },
            { name: 'Oceanic Oasis', y: 0.10 },
            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer.nativeElement, options);
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
        text: 'Category : R2',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: 'Oceanic Oasis', y: 2.67, },
            { name: 'Coastal Currents', y: 13.77 },
            { name: 'Aqua Bliss', y: 16.907 },
            { name: 'Dr. Reddy', y: 2.907 },
            { name: 'Aqua Bliss', y: 0.00 },
            { name: 'Coastal Currents', y: 0.001 },
            { name: 'Oceanic Oasis', y: 0.10 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer.nativeElement, options);
  }
  renderPieChart3() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Category : R1',
        align: 'left', style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: 'Oceanic Oasis', y: 2.67, },
            { name: 'Coastal Currents', y: 13.77 },
            { name: 'Aqua Bliss', y: 16.907 },
            { name: 'Dr. Reddy', y: 2.907 },
            { name: 'Aqua Bliss', y: 0.00 },
            { name: 'Coastal Currents', y: 0.001 },
            { name: 'Oceanic Oasis', y: 0.10 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer.nativeElement, options);
  }
  renderPieChart4() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Category : O',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: 'Oceanic Oasis', y: 2.67, },
            { name: 'Coastal Currents', y: 13.77 },
            { name: 'Aqua Bliss', y: 16.907 },
            { name: 'Dr. Reddy', y: 2.907 },
            { name: 'Aqua Bliss', y: 0.00 },
            { name: 'Coastal Currents', y: 0.001 },
            { name: 'Oceanic Oasis', y: 0.10 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer.nativeElement, options);
  }
  renderPieChart5() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'TOTAL',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: 'Oceanic Oasis', y: 2.67, },
            { name: 'Coastal Currents', y: 13.77 },
            { name: 'Aqua Bliss', y: 16.907 },
            { name: 'Dr. Reddy', y: 2.907 },
            { name: 'Aqua Bliss', y: 0.00 },
            { name: 'Coastal Currents', y: 0.001 },
            { name: 'Oceanic Oasis', y: 0.10 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer.nativeElement, options);
  }

  renderPieChart6() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Category O',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: 'Assembly', y: 11, },
            { name: 'Function', y: 0 },
            { name: 'Percieved Quality', y: 0 },
            { name: 'Performance', y: 2 },
            { name: 'Regulation/Government', y: 4 },
            { name: 'safty', y: 0 },
            { name: 'Sevice', y: 0 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer1.nativeElement, options);
  }
  renderPieChart7() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Category R1',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: 'Assembly', y: 9, },
            { name: 'Function', y: 3 },
            { name: 'Percieved Quality', y: 0 },
            { name: 'Performance', y: 1 },
            { name: 'Regulation/Government', y: 1 },
            { name: 'safty', y: 0 },
            { name: 'Sevice', y: 0 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer1.nativeElement, options);
  }

  renderPieChart8() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Category R2',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: 'Assembly', y: 3, },
            { name: 'Function', y: 2 },
            { name: 'Percieved Quality', y: 1 },
            { name: 'Performance', y: 5 },
            { name: 'Regulation/Government', y: 3 },
            { name: 'safty', y: 0 },
            { name: 'Sevice', y: 0 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer1.nativeElement, options);
  }
  renderPieChart9() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Category C',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: 'Assembly', y: 16, },
            { name: 'Function', y: 3 },
            { name: 'Percieved Quality', y: 1 },
            { name: 'Performance', y: 5 },
            { name: 'Regulation/Government', y: 1 },
            { name: 'safty', y: 0 },
            { name: 'Sevice', y: 0 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer1.nativeElement, options);
  }

  renderPieChart10() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Total',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: 'Assembly', y: 39, },
            { name: 'Function', y: 8 },
            { name: 'Percieved Quality', y: 2 },
            { name: 'Performance', y: 16 },
            { name: 'Regulation/Government', y: 9 },
            { name: 'safty', y: 0 },
            { name: 'Sevice', y: 0 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer1.nativeElement, options);
  }

  renderPieChart11() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Total',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: '<200', y: 39, },
            { name: '201-400', y: 8 },
            { name: '401-600', y: 2 },
            { name: '601-800', y: 16 },
            { name: '801-1000', y: 9 },
            { name: '1000+', y: 0 },
            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer4.nativeElement, options);
  }
  renderPieChart12() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Total',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: '>200', y: 39, },
            { name: '201-400', y: 8 },
            { name: '401-600', y: 2 },
            { name: '601-800', y: 16 },
            { name: '801-1000', y: 9 },
            { name: '1000+', y: 0 },
            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer4.nativeElement, options);
  }
  renderPieChart13() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Total',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: '<200', y: 39, },
            { name: '201-400', y: 8 },
            { name: '401-600', y: 2 },
            { name: '601-800', y: 16 },
            { name: '801-1000', y: 9 },
            { name: '1000+', y: 0 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer4.nativeElement, options);
  }
  renderPieChart14() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Total',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: '<200', y: 39, },
            { name: '201-400', y: 8 },
            { name: '401-600', y: 2 },
            { name: '601-800', y: 16 },
            { name: '801-1000', y: 9 },
            { name: '1000+', y: 0 },
            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer4.nativeElement, options);
  }
  renderPieChart15() {
    const options: Highcharts.Options = {
      chart: {
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Total',
        align: 'left',
        style: {
          fontSize: '10px' // Adjust the font size as needed
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: '<200', y: 39, },
            { name: '201-400', y: 8 },
            { name: '401-600', y: 2 },
            { name: '601-800', y: 16 },
            { name: '801-1000', y: 9 },
            { name: '1000+', y: 0 },
            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer4.nativeElement, options);
  }
  AgengingAnalysis() {
    const radaroptions: Highcharts.Options = {
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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} '
          }
        }
      },
      series: [
        {
          name: '',
          colorByPoint: true,
          type: 'pie', // Add this line to specify the chart type
          data: [
            { name: '0 - 10', y: 15, },
            { name: '10-20', y: 12 },
            { name: '20-30', y: 7 },
            { name: '30-40', y: 5 },
            { name: '40-50', y: 15 },
            { name: '50-100', y: 10 },

            { name: '100 +', y: 30 },


            // Add more data points as needed
          ]


        } as Highcharts.SeriesOptionsType // Specify the type here
      ]
    };

    Highcharts.chart(this.chartContainer3.nativeElement, radaroptions);
  }
  notes() { }

  public onSelect(event: any) {
    console.log(event);
  }

  navigate() {
    window.open('/#/om/root-login/root-issues', "_blank");
  }
  mainMenu(value: string) {
    if (value == 'CSelected') {
      this.CSelected = true;
      this.testSelected = false
      this.R1Selected = false;
      this.R2Selected = false;
      this.OSelected = false;
      this.Total = false;
    } else if (value == 'testSelected') {
      this.testSelected = true
      this.CSelected = false;
      this.R1Selected = false;
      this.R2Selected = false;
      this.OSelected = false;
      this.Total = false;
    } else if (value == 'R1Selected') {
      this.testSelected = false
      this.CSelected = false;
      this.R1Selected = true;
      this.R2Selected = false;
      this.OSelected = false;
      this.Total = false;
    }
    else if (value == 'R2Selected') {
      this.testSelected = false
      this.CSelected = false;
      this.R1Selected = false;
      this.R2Selected = true;
      this.OSelected = false;
      this.Total = false;
    } else if (value == 'OSelected') {
      this.testSelected = false
      this.CSelected = false;
      this.R1Selected = false;
      this.R2Selected = false;
      this.OSelected = true;
      this.Total = false;
    } else if (value == 'Total') {
      this.testSelected = false
      this.CSelected = false;
      this.R1Selected = false;
      this.R2Selected = false;
      this.OSelected = false;
      this.Total = true;
    }
  }

  mainMenu1(value: string) {
    if (value == 'NCSelected') {
      this.NtestSelected = false;
      this.NCSelected = true;
      this.NR1Selected = false;
      this.NR2Selected = false;
      this.NOSelected = false;
      this.NTotal = false;
    } else if (value == 'NR1Selected') {
      this.NtestSelected = false;
      this.NCSelected = false;
      this.NR1Selected = true;
      this.NR2Selected = false;
      this.NOSelected = false;
      this.NTotal = false;
    } else if (value == 'NR2Selected') {
      this.NtestSelected = false;
      this.NCSelected = false;
      this.NR1Selected = false;
      this.NR2Selected = true;
      this.NOSelected = false;
      this.NTotal = false;
    } else if (value == 'NOSelected') {
      this.NtestSelected = false;
      this.NCSelected = false;
      this.NR1Selected = false;
      this.NR2Selected = false;
      this.NOSelected = true;
      this.NTotal = false;
    } else if (value == 'NTotal') {
      this.NtestSelected = false;
      this.NCSelected = false;
      this.NR1Selected = false;
      this.NR2Selected = false;
      this.NOSelected = false;
      this.NTotal = true;
    }
    else if (value == 'NtestSelected') {
      this.NtestSelected = true;
      this.NCSelected = false;
      this.NR1Selected = false;
      this.NR2Selected = false;
      this.NOSelected = false;
      this.NTotal = false;
    }
  }

  openIssuesDialog() {
    console.log("working")
    this.router.navigate(['/radar']);
  }
}

