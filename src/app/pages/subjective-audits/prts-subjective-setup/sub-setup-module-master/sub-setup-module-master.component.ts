import { SectionPopComponent } from './section-pop/section-pop.component';
import { AddSubSetupModuleMasterComponent } from './add-sub-setup-module-master/add-sub-setup-module-master.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sub-setup-module-master',
  templateUrl: './sub-setup-module-master.component.html',
  styleUrls: ['./sub-setup-module-master.component.scss']
})
export class SubSetupModuleMasterComponent implements OnInit {

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle: boolean = false;
  gridCmp: any;
  tableList = [];
  values = [];
  Status = [{ name: 'Active', value: true },
  { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  values1 = [
    { section: '2', Audit: 'Product Quality Audit', modulename: "BSO", status: true },
    { section: '4', Audit: 'Product Quality Audit', modulename: "Door" },
    { section: '3', Audit: 'Product Quality Audit', modulename: "Rear bumper", status: true },
    { section: '1', Audit: 'Product Quality Audit', modulename: "Fuel Flap", status: true },
    { section: '2', Audit: 'Product Quality Audit', modulename: "Upper trim" },

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
    this.dialog.open(AddSubSetupModuleMasterComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
  sectionpop() {
    this.dialog.open(SectionPopComponent, {
      height: 'auto',
      width: '400px'
    });
  }

}
