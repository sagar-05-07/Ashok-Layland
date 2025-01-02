import { AddEditModalComponent } from './add-edit-modal/add-edit-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-masterdata-new',
  templateUrl: './masterdata-new.component.html',
  styleUrls: ['./masterdata-new.component.scss']
})
export class MasterdataNewComponent implements OnInit {


  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog,
    //private alertService: AlertService
  ) { }
  // public popoverTitle: string = 'Confirm Delete';
  // public popoverMessage: string = 'Are you sure you want to delete this.?';
  // public cancelClicked: boolean = false;
  // public popoverStatusTitle: string = 'Confirm Status Change';
  // public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  ngOnInit() {
  }
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle: boolean = false;




  values = [
    { model: "Hector", status: true },
    { model: "Astor", status: true },
    { model: "Gloster", status: true },
    { model: "ZSEV", status: true },
  ]
  statusOptions = [
    { value: 1, name: 'Prepared Quote', colorCode: '#00ff0040' },
    { value: 2, name: 'PM Quote Review', colorCode: '#C0C0C0' },
    { value: 3, name: 'Quote Send', colorCode: '#87CEFA' },
    { value: 4, name: 'Awarded', colorCode: '#FFA50069' },
    { value: 5, name: 'Rejected', colorCode: '#FFFF00' },
    { value: 6, name: 'Document Taker Only', colorCode: '#FF00FF' },
  ]
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  public addmodule(item) {
    this.dialog.open(AddEditModalComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

}
