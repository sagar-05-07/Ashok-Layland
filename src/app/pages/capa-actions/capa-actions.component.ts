import { Component, OnInit } from '@angular/core';
import { ImgPopupComponent } from '../checklist-dashboard/system/img-popup/img-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capa-actions',
  templateUrl: './capa-actions.component.html',
  styleUrls: ['./capa-actions.component.scss']
})
export class CapaActionsComponent implements OnInit {

  isResolved: boolean = false;

  constructor(
    public routes: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  back() {
    this.routes.navigate(['/app/new-audits/subjective-audits/subjective-audits-issues-status']);
  }


  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      console.log('Selected file:', file.name);
      // You can implement any additional logic here, like uploading the file or showing its name.
    }
  }

  openImageDialog(imgSrc: string) {
    this.dialog.open(ImgPopupComponent, {
      data: { imgSrc: imgSrc },
      width: '600px', // Set the width of the dialog
      height: 'auto' // Set the height as needed
    });
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle = false;
  gridToggle = false;



  values = [];





  opendashboard() {
    window.open('/#/app/checklistdoard/issuelog/request-type');
  }

  request(item) {
    // this.dialog.open(RequestTypeComponent, {
    //   data: item,
    //   width: "1100px",
    //   height: "auto"
    // })
  }

  public addchecklistissuelineitem(item) {
    // this.dialog.open(AddChecklistLineitemComponent, {
    //   data: item,
    //   width: "900px",
    //   height: "auto"
    // })
  }


  scrollGrid(side) {
    var ele = document.getElementById('tableScroll');
    if (side == 'right')
      ele.scrollLeft += 210;
    else
      ele.scrollLeft -= 210;
  }

  public addnote(item) {
    // this.dialog.open(AddTableNotesComponent, {
    //   data: item,
    //   width: "600px",
    //   height: "auto"
    // })
  }

  public imageSource(item) {
    // this.dialog.open(ImageDisplayComponent, {
    //   data: item,
    //   width: "600px",
    //   height: "auto"
    // })
  }



  values1 = [
    { sno: '1', module: 'BSO', function: 'Aesthetics', defect: 'Thin Paint', issue: 'Fuel filler hinge area/Fuel flap edge', side: 'LH', face: 'FT', agency: 'GA', demerit: '1' },
    { sno: '2', module: 'Door', function: 'Mutilation', defect: 'Ding', issue: 'RHR BSO Ding', side: 'RH', face: 'RR', agency: 'Paint', demerit: '10' },
    { sno: '3', module: 'Rear bumper', function: 'Aesthetics', defect: 'Scratch ', issue: 'LHR Door outer scratch', side: 'BH', face: 'BH', agency: 'Body', demerit: '20' },
    { sno: '4', module: 'Tailgate', function: 'Mutilation', defect: 'Sink / flow marks', issue: 'Roof rail - Sink marks / Waviness', side: 'LH', face: 'BH', agency: 'SQE', demerit: '10' },
    { sno: '5', module: 'Central Console', function: 'Mutilation', defect: 'Dirty', issue: 'RHR 60 seat dirty', side: 'LH', face: 'FT', agency: 'SQE', demerit: '50' },
    { sno: '6', module: 'C pillar', function: 'Aesthetics', defect: 'Color / Shade Mismatch', issue: 'Roof rail - Sink marks / Waviness', side: 'RH', face: 'FT', agency: 'Body', demerit: '20' },
    { sno: '7', module: 'Rear Seat', function: 'Mutilation', defect: 'Tool / Scuff Marks', issue: 'Roof rail - Sink marks / Waviness', side: 'BH', face: 'BH', agency: 'SQE', demerit: '1' },
    { sno: '8', module: 'Door', function: 'Aesthetics', defect: 'Damage/ Scratch/ Chip', issue: 'RH rocker panel scratch', side: 'RR', face: 'FT', agency: 'Paint', demerit: '10' },
    { sno: '9', module: 'BSO', function: 'Aesthetics', defect: 'Uneven/Excess Gap', issue: 'Door apeture / BSO color mismatch- G red', side: 'RH', face: 'FT', agency: 'Body', demerit: '20' },
    { sno: '10', module: 'Tailgate', function: 'Mutilation', defect: 'Dent/ Ding / Bump', issue: 'Fuel flap - Reinforcement Panel Spot Exposed', side: 'RR', face: 'RR', agency: 'Paint', demerit: '50' },

  ]

  buttons = [
    { id: 1, name: 'Casting (4)', colorClass: 'red-line', isChecked: false },
    { id: 2, name: 'Forging (1)', colorClass: 'green-line', isChecked: false },
    { id: 3, name: 'Machining (3)', colorClass: 'yellow-line', isChecked: false },
    { id: 4, name: 'Non-Metallic (5)', colorClass: 'red-line', isChecked: false },
    { id: 5, name: 'Sheet Metal (4)', colorClass: 'green-line', isChecked: false },
    { id: 6, name: 'Proprietary (1)', colorClass: 'yellow-line', isChecked: false },
    { id: 7, name: 'Steel Mills (3)', colorClass: 'red-line', isChecked: false },
    { id: 8, name: 'Casting (4)', colorClass: 'green-line', isChecked: false },
    { id: 9, name: 'Forging (1)', colorClass: 'yellow-line', isChecked: false },
    { id: 10, name: 'Machining (3)', colorClass: 'red-line', isChecked: false },
    { id: 11, name: 'Non-Metallic (5)', colorClass: 'green-line', isChecked: false },
    { id: 12, name: 'Sheet Metal (4)', colorClass: 'yellow-line', isChecked: false },
    { id: 13, name: 'Proprietary (1)', colorClass: 'red-line', isChecked: false },
    { id: 14, name: 'Steel Mills (3)', colorClass: 'green-line', isChecked: false },
    { id: 15, name: 'Casting (4)', colorClass: 'yellow-line', isChecked: false },
    { id: 16, name: 'Forging (1)', colorClass: 'red-line', isChecked: false },
    { id: 17, name: 'Machining (3)', colorClass: 'green-line', isChecked: false },
    { id: 18, name: 'Non-Metallic (5)', colorClass: 'yellow-line', isChecked: false },
    { id: 19, name: 'Sheet Metal (4)', colorClass: 'red-line', isChecked: false },
    { id: 20, name: 'Proprietary (1)', colorClass: 'green-line', isChecked: false },
    { id: 21, name: 'Steel Mills (3)', colorClass: 'yellow-line', isChecked: false },
    { id: 22, name: 'Casting (4)', colorClass: 'red-line', isChecked: false },
    { id: 23, name: 'Forging (1)', colorClass: 'green-line', isChecked: false },
    { id: 24, name: 'Machining (3)', colorClass: 'yellow-line', isChecked: false },
    { id: 25, name: 'Non-Metallic (5)', colorClass: 'red-line', isChecked: false },
    { id: 26, name: 'Sheet Metal (4)', colorClass: 'green-line', isChecked: false },
    { id: 27, name: 'Proprietary (1)', colorClass: 'yellow-line', isChecked: false },
    { id: 28, name: 'Steel Mills (3)', colorClass: 'red-line', isChecked: false },
    { id: 29, name: 'Casting (4)', colorClass: 'green-line', isChecked: false },
    { id: 30, name: 'Forging (1)', colorClass: 'yellow-line', isChecked: false }
  ];

  color(buttonId: number) {
    // Toggle the isChecked property for the clicked button
    this.buttons = this.buttons.map(button => button.id === buttonId ? { ...button, isChecked: !button.isChecked } : button);
  }


}






