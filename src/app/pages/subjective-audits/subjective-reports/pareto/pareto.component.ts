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
  yAxisLabel: string = 'Top 50 Defects';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
  }

  monthlyDistributionData = [
    {
      name: 'Top 50 Defects',
      value: 50
    },
    {
      name: 'All Others Defects',
      value: 150
    },
  ];

  single = [
    {
      "name": "Thin Paint",
      "value": 70
    },
    {
      "name": "Tool / Scuff Marks",
      "value": 85
    },
    {
      "name": "Scratch",
      "value": 100
    },
    {
      "name": "Sink / flow marks",
      "value": 60
    },
    {
      "name": "Thin Paint 1",
      "value": 70
    },
    {
      "name": "Tool / Scuff Marks 1",
      "value": 55
    },
    {
      "name": "Scratch 1",
      "value": 100
    },
    {
      "name": "Sink / flow marks 1",
      "value": 68
    },
    {
      "name": "Thin Paint 2",
      "value": 70
    },
    {
      "name": "Tool / Scuff Marks 2",
      "value": 25
    },
    {
      "name": "Scratch 2",
      "value": 100
    },
    {
      "name": "Sink / flow marks 2",
      "value": 60
    },
    {
      "name": "Thin Paint 3",
      "value": 70
    },
    {
      "name": "Tool / Scuff Marks 3",
      "value": 95
    },
    {
      "name": "Scratch 3",
      "value": 100
    },
    {
      "name": "Sink / flow marks 3",
      "value": 30
    },
    {
      "name": "Thin Paint 4",
      "value": 10
    },
    {
      "name": "Tool / Scuff Marks 4",
      "value": 85
    },
    {
      "name": "Scratch 4",
      "value": 100
    },
    {
      "name": "Sink / flow marks 4",
      "value": 60
    },
    {
      "name": "Thin Paint 5",
      "value": 70
    },
    {
      "name": "Tool / Scuff Marks 5",
      "value": 89
    },
    {
      "name": "Scratch 5",
      "value": 50
    },
    {
      "name": "Sink / flow marks 5",
      "value": 80
    },
    {
      "name": "Thin Paint 6",
      "value": 70
    },
    {
      "name": "Tool / Scuff Marks 6",
      "value": 85
    },
    {
      "name": "Scratch 6",
      "value": 100
    },
    {
      "name": "Sink / flow marks 6",
      "value": 10
    },
    {
      "name": "Thin Paint 7",
      "value": 70
    },
    {
      "name": "Tool / Scuff Marks 7",
      "value": 85
    },
    {
      "name": "Scratch 7",
      "value": 100
    },
    {
      "name": "Sink / flow marks 7",
      "value": 20
    },
    {
      "name": "Thin Paint 8",
      "value": 70
    },
    {
      "name": "Tool / Scuff Marks 8",
      "value": 89
    },
    {
      "name": "Scratch 8",
      "value": 100
    },
    {
      "name": "Sink / flow marks 8",
      "value": 30
    },
    {
      "name": "Thin Paint 9",
      "value": 70
    },
    {
      "name": "Tool / Scuff Marks 9",
      "value": 85
    },
    {
      "name": "Scratch 9",
      "value": 100
    },
    {
      "name": "Sink / flow marks 9",
      "value": 60
    },
    {
      "name": "Thin Paint 10",
      "value": 90
    },
    {
      "name": "Tool / Scuff Marks 10",
      "value": 85
    },
    {
      "name": "Scratch 10",
      "value": 20
    },
    {
      "name": "Sink / flow marks 10",
      "value": 60
    },
    {
      "name": "Thin Paint 11",
      "value": 70
    },
    {
      "name": "Tool / Scuff Marks 11",
      "value": 89
    },
    {
      "name": "Scratch 11",
      "value": 100
    },
    {
      "name": "Sink / flow marks 11",
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
