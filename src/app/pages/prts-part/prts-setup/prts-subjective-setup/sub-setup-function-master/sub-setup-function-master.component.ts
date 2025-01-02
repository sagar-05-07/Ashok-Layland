import { AddSubSetupFunctionMasterComponent } from './add-sub-setup-function-master/add-sub-setup-function-master.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sub-setup-function-master',
  templateUrl: './sub-setup-function-master.component.html',
  styleUrls: ['./sub-setup-function-master.component.scss']
})
export class SubSetupFunctionMasterComponent implements OnInit {

 
  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  values=[ ]
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
    { Audit: 'Product Quality Audit',status:true,modulename:"BSO",functioname:"Aesthetics"},
    { Audit: 'Product Quality Audit',status:true,modulename:"Door",functioname:"Mutilation"},
    { Audit: 'Product Quality Audit',status:true,modulename:"Rear bumper",functioname:"Mutilation"},
    { Audit: 'Product Quality Audit',status:true,modulename:"Fuel Flap",functioname:"Aesthetics"},
    { Audit: 'Product Quality Audit',status:true,modulename:"Upper trim",functioname:"Mutilation"},
    // {status:true,modulename:"Tailgate",functioname:"Aesthetics"},
    // {status:true,modulename:"Central Console",functioname:"Mutilation"},
    // {status:true,modulename:"C pillar",functioname:"Aesthetics"},
    // {status:true,modulename:"REAR SEAT",functioname:"Mutilation"},
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
   // this.alertService.createAlert('Successfully saved.', 1);
}

  public addfunction(item){
    this.dialog.open(AddSubSetupFunctionMasterComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }


}
