import { AddSectionComponent } from './add-section/add-section.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DragulaService } from 'ng2-dragula';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  /* The above code is for the table. */

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle: boolean = false;
  gridCmp: any;
  supplyDetails = [];
  tableList = [];
  Status = [{ name: 'Active', value: true },
  { name: "Inactive", value: false }];
  type: any;
  navParameter: any;

  constructor(
    public dialog: MatDialog,
    private dragulaService: DragulaService,
    private _activeRoute: ActivatedRoute,) {
    //Drag And Drop
    this.dragulaService.destroy("MONITORSTEPS");
    this.dragulaService.createGroup("MONITORSTEPS", {
      revertOnSpill: true,
    });
    this.dragulaService.dropModel("MONITORSTEPS").subscribe((args) => {
    });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      this.supplyDetails = this.supplyDetails1
    }
    else {
      return;
    }
  }

  supplyDetails1 = [
    { Audit: 'Product Quality Audit', section: "Static", status: true },
    { Audit: 'Product Quality Audit', section: "Dynamic" },
    { Audit: ' Body Audit', section: "Electrical", status: true },
    { Audit: 'Paint Audit', section: "Chasis & U B", status: true },
    { Audit: 'Product Quality Audit', section: "Rain Test", status: true },

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
    this.dialog.open(AddSectionComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

}
