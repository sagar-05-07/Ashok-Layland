import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddCityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  selectedState: number; // Variable to hold the selected state code

  // Sample data for states
  states = [
    { code: 1, name: 'Maharashtra' },
    { code: 2, name: 'Delhi' },
    { code: 3, name: 'Karnataka' },
    { code: 4, name: 'Gujarat' }
    // Add more states as needed
  ];

  close(): void {
    this.dialogRef.close();
  }

}
