import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.scss']
})
export class AddStateComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<AddStateComponent>,
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

