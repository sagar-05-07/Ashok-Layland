import { Component, OnInit } from '@angular/core';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { MatDialog } from '@angular/material/dialog';
import { LocationPopComponent } from './location-pop/location-pop.component';

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.scss']
})
export class SupplierMasterComponent implements OnInit {

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
    {
      suppliername: 'ABC Suppliers Ltd',
      code: 'SUP1234',
      email: 'contact@abcsuppliers.com',
      phone: '+91-9876543210',
      status: true,
    },
    {
      suppliername: 'Global Parts Co.',
      code: 'SUP5678',
      email: 'info@globalparts.com',
      phone: '+91-8123456789',
      status: false,
    },
    {
      suppliername: 'Tech Innovators',
      code: 'SUP9123',
      email: 'support@techinnovators.com',
      phone: '+91-7012345678',
      status: true,
    },
    {
      suppliername: 'Auto Components Inc.',
      code: 'SUP3456',
      email: 'sales@autocomponents.com',
      phone: '+91-9923456780',
      status: false,
    },
    {
      suppliername: 'Green Energy Solutions',
      code: 'SUP7890',
      email: 'hello@greenenergy.com',
      phone: '+91-9781234567',
      status: true,
    }
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
    this.dialog.open(AddSupplierComponent, {
      data: item,
      width: "600px",
      height: "auto"
    });
  }

  locationPop(item) {
    this.dialog.open(LocationPopComponent, {
      data: item,
      width: "900px",
      height: "auto"
    })
  }


}

