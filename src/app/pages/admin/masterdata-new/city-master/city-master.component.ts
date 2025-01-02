import { Component, OnInit } from '@angular/core';
import { AddCityComponent } from './add-city/add-city.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.scss']
})
export class CityMasterComponent implements OnInit {

  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle: boolean = false;


  values = [
    { cityname: 'Mumbai', statename: 'Maharashtra', status: true },
    { cityname: 'Delhi', statename: 'Delhi', status: false },
    { cityname: 'Bengaluru', statename: 'Karnataka', status: true },
    { cityname: 'Hyderabad', statename: 'Telangana', status: true },
    { cityname: 'Ahmedabad', statename: 'Gujarat', status: false },
    { cityname: 'Chennai', statename: 'Tamil Nadu', status: true },
    { cityname: 'Kolkata', statename: 'West Bengal', status: false },
    { cityname: 'Pune', statename: 'Maharashtra', status: true },
    { cityname: 'Jaipur', statename: 'Rajasthan', status: true },
    { cityname: 'Surat', statename: 'Gujarat', status: false },
    { cityname: 'Lucknow', statename: 'Uttar Pradesh', status: true },
    { cityname: 'Kanpur', statename: 'Uttar Pradesh', status: false },
    { cityname: 'Nagpur', statename: 'Maharashtra', status: true },
    { cityname: 'Visakhapatnam', statename: 'Andhra Pradesh', status: true },
    { cityname: 'Patna', statename: 'Bihar', status: false },
    { cityname: 'Indore', statename: 'Madhya Pradesh', status: true }
  ];

  statusOptions = [
    { value: 1, name: 'Prepared Quote', colorCode: '#00ff0040' },
    { value: 2, name: 'PM Quote Review', colorCode: '#C0C0C0' },
    { value: 3, name: 'Quote Send', colorCode: '#87CEFA' },
    { value: 4, name: 'Awarded', colorCode: '#FFA50069' },
    { value: 5, name: 'Rejected', colorCode: '#FFFF00' },
    { value: 6, name: 'Document Taker Only', colorCode: '#FF00FF' },
  ]
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
  }

  addmodule(item) {
    this.dialog.open(AddCityComponent, {
      data: item,
      width: "600px",
      height: "auto"
    });
  }



}


