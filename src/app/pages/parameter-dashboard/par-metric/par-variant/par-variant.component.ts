import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { parameterdata } from '../../parameterdata';

@Component({
  selector: 'app-par-variant',
  templateUrl: './par-variant.component.html',
  styleUrls: ['./par-variant.component.scss']
})
export class ParVariantComponent implements OnInit {

  public three: any[];
  public single: any[];
  public first: any[];
  // view: any[] = [250,300];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  constructor() {
    const three = [
      {
        name: 'VDI',
        value: 129
      },
      {
        name: 'SXI',
        value: 75
      },
      {
        name: 'SXI(o)',
        value: 119
      },
      {
        name: 'LDI',
        value: 32
      },


    ];
    const first = [
      {
        name: 'VDI',
        value: 89
      },
      {
        name: 'SXI',
        value: 85
      },
      {
        name: 'SXI(o)',
        value: 90
      },
      {
        name: 'LDI',
        value: 97
      },

    ];
    Object.assign(this, { first, three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = parameterdata.variant();
    }
    else {

    }
  }

  items = [




  ];

}
