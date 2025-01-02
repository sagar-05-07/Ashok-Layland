import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pareto',
  templateUrl: './pareto.component.html',
  styleUrls: ['./pareto.component.scss']
})
export class ParetoComponent implements OnInit {

  // Bar chart
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  // single: any[];
  view: any[] = [1000, 1500];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Top 50 Checkpoints';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
  }

  monthlyDistributionData = [
    {
      name: 'Top 50 Checkpoints',
      value: 50
    },
    {
      name: 'All Others Checkpoints',
      value: 150
    },
  ];

  single = [
    {
      "name": "121 Gap (a)",
      "value": 70
    },
    {
      "name": "122 Gap (b)",
      "value": 85
    },
    {
      "name": "123 Gap (c)",
      "value": 100
    },
    {
      "name": "124 Flush (a)",
      "value": 60
    },
    {
      "name": "125 Flush (b)",
      "value": 70
    },
    {
      "name": "126 Flush (c)",
      "value": 55
    },
    {
      "name": "135 Alignment",
      "value": 100
    },
    {
      "name": "144 Parallelism",
      "value": 68
    },
    {
      "name": "155 Consistency",
      "value": 70
    },
    {
      "name": "141 Gap (a)",
      "value": 25
    },
    {
      "name": "142 Gap (b)",
      "value": 100
    },
    {
      "name": "143 Gap (c)",
      "value": 60
    },
    {
      "name": "222 Flush (c)",
      "value": 70
    },
    {
      "name": "221 Flush (b)",
      "value": 95
    },
    {
      "name": "220 Flush (a)",
      "value": 100
    },
    {
      "name": "235 Alignment",
      "value": 30
    },
    {
      "name": "344 Parallelism",
      "value": 10
    },
    {
      "name": "334 Parallelism",
      "value": 85
    },
    {
      "name": "455 Consistency",
      "value": 100
    },
    {
      "name": "325 Consistency",
      "value": 60
    },
    {
      "name": "528 Consistency",
      "value": 70
    },
    {
      "name": "523 Gap (a)",
      "value": 89
    },
    {
      "name": "153 Gap (b)",
      "value": 50
    },
    {
      "name": "423 Gap (c)",
      "value": 80
    },
    {
      "name": "156 Gap (b)",
      "value": 70
    },
    {
      "name": "178 Flush (a)",
      "value": 85
    },
    {
      "name": "179 Flush (b)",
      "value": 100
    },
    {
      "name": "180 Flush (c)",
      "value": 10
    },
    {
      "name": "165 Alignment",
      "value": 70
    },
    {
      "name": "444 Parallelism",
      "value": 85
    },
    {
      "name": "555 Consistency",
      "value": 100
    },
    {
      "name": "333 Gap (a)",
      "value": 20
    },
    {
      "name": "334 Gap (b)",
      "value": 70
    },
    {
      "name": "335 Gap (c)",
      "value": 89
    },
    {
      "name": "368 Flush (a)",
      "value": 100
    },
    {
      "name": "369 Flush (b)",
      "value": 30
    },
    {
      "name": "370 Flush (c)",
      "value": 70
    },
    {
      "name": "191 Alignment",
      "value": 85
    },
    {
      "name": "192 Alignment",
      "value": 100
    },
    {
      "name": "193 Parallelism",
      "value": 60
    },
    {
      "name": "195 Consistency",
      "value": 90
    },
    {
      "name": "196 Gap (a)",
      "value": 85
    },
    {
      "name": "197 Gap (b)",
      "value": 20
    },
    {
      "name": "198 Gap (c)",
      "value": 60
    },
    {
      "name": "291 Flush (a)",
      "value": 70
    },
    {
      "name": "292 Flush (b)",
      "value": 89
    },
    {
      "name": "293 Flush (c)",
      "value": 100
    },
    {
      "name": "154 Parallelism",
      "value": 60
    },

  ];
  ngOnInit() {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

