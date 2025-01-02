import { AddFuelTypeComponent } from './add-fuel-type/add-fuel-type.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fuel-type',
  templateUrl: './fuel-type.component.html',
  styleUrls: ['./fuel-type.component.scss']
})
export class FuelTypeComponent implements OnInit {

  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog, ) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
values=[]
  ngOnInit() {
    if (environment.mode == 1){
      this.values= this.values1
    }
    else {
      return;
    }
  }
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

 
           

  values1 = [
    {fuel_type:"Petrol",status:true},
    {fuel_type:"Diesel",status:true},
    {fuel_type:"EV",status:true},
   
   
  ]
  statusOptions = [
    {value:1, name: 'Prepared Quote', colorCode: '#00ff0040'},
    {value:2, name: 'PM Quote Review', colorCode: '#C0C0C0'},
    {value:3, name: 'Quote Send', colorCode: '#87CEFA'},
    {value:4, name: 'Awarded', colorCode: '#FFA50069'},
    {value:5, name: 'Rejected', colorCode: '#FFFF00'},
    {value:6, name: 'Document Taker Only', colorCode: '#FF00FF'},
  ]
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
}

  public addmodule(item){
    this.dialog.open(AddFuelTypeComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }
}
