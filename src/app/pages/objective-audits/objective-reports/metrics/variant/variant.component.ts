import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { environment } from 'src/environments/environment';
import { metricsData } from '../metrics.data';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnInit {

  items: any = [];
  container: any = [];
  highcharts: any;
  chartOptions: any;

  constructor() {
  }

  ngOnInit() {
    if (environment.mode == 1) {
      this.items = metricsData.variant();
      // this.container = metricsData.variantGraph();
      this.highcharts = Highcharts;
      this.chartOptions = {
        title: {
          text: 'Rating Distribution by Variant',
          align: 'center'
        },
        xAxis: {
          categories: ['VDI', 'SXI', 'SXI(o)', 'LDI']
        },
        yAxis: {
          title: {
            text: 'Rating'
          }
        },
        tooltip: {
          valueSuffix: 'Rating'
        },
        series: [{
          type: 'column',
          name: '2020',
          data: [59, 83, 65, 88]
        }, {
          type: 'column',
          name: '2021',
          data: [24, 79, 72, 90]
        }, {
          type: 'column',
          name: '2022',
          data: [58, 88, 75, 90]
        },
        {
          type: 'spline',
          name: 'Average',
          data: [47, 83.33, 70.66, 89.33],
          marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
          }
        },
          //  {
          //   type: 'pie',
          //   name: 'Total',
          //   data: [{
          //     name: '2020',
          //     y: 619,
          //     color: Highcharts.getOptions().colors[0], // 2020 color
          //     dataLabels: {
          //       enabled: true,
          //       distance: -50,
          //       format: '{point.total} M',
          //       style: {
          //         fontSize: '15px'
          //       }
          //     }
          //   }, {
          //     name: '2021',
          //     y: 586,
          //     color: Highcharts.getOptions().colors[1] // 2021 color
          //   }, {
          //     name: '2022',
          //     y: 647,
          //     color: Highcharts.getOptions().colors[2] // 2022 color
          //   }],
          //   center: [75, 65],
          //   size: 100,
          //   innerSize: '70%',
          //   showInLegend: false,
          //   dataLabels: {
          //     enabled: false
          //   }
          // }
        ]
      };
    }
    else {
    }
  }
}

