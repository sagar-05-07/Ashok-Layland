import { Component, OnInit } from '@angular/core';
import { RadarData } from 'src/app/pages/radar/RadarData';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sub-category-type-trend',
  templateUrl: './sub-category-type-trend.component.html',
  styleUrls: ['./sub-category-type-trend.component.scss']
})
export class SubCategoryTypeTrendComponent implements OnInit {

  public three: any[];
  public single: any[];
  public first: any[];
  items: any[];
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



  }

  ngOnInit() {
    if (environment.mode === 1) {
      this.items = RadarData.ParameterCategoryGrid();
      const three = RadarData.ParameterCategoryPieChart2();
      const first = RadarData.ParameterCategoryPieChart1();
      Object.assign(this, { first, three });

    }
  }

}
