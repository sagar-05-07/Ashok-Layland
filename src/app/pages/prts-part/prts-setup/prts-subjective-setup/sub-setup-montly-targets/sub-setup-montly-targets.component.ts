import { AddSubSetupMonthlyTargetsComponent } from './add-sub-setup-monthly-targets/add-sub-setup-monthly-targets.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sub-setup-montly-targets',
  templateUrl: './sub-setup-montly-targets.component.html',
  styleUrls: ['./sub-setup-montly-targets.component.scss']
})
export class SubSetupMontlyTargetsComponent implements OnInit {
  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';

  

  values1 = [
    { Audit: 'Product Quality Audit', target:'100',month:'Oct',year:"2021",model:"Hector",status:true},
    { Audit: 'Product Quality Audit', target:'75',month:'Nov',year:"2021",model:"Astor",status:true},
    { Audit: 'Product Quality Audit', target:'190',month:'Dec',year:"2021",model:"Gloster",status:true},
    { Audit: 'Product Quality Audit', target:'120',month:'Jan',year:"2022",model:"ZSEV",status:true},
    
    ]

  values=[]

  ngOnInit() {
    if (environment.mode == 1){
      this.values= this.values1
    }
    else {
      return;
    }
  }

  addtarget(item){
    this.dialog.open(AddSubSetupMonthlyTargetsComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }
  saveStatus() {
   // this.alertService.createAlert('Successfully saved.', 1);
}

openUploadCSV()
{

}

downloadSampleExcel()
{
  
}


}
