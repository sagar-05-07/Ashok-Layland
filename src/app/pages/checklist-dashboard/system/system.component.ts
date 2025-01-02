import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImgPopupComponent } from './img-popup/img-popup.component';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {


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
  isChecked1: string = 'no';
  isChecked2: string = 'yes';
  isChecked3: string = 'yes';
  isChecked4: string = 'yes';
  isChecked5: string = 'yes';
  isChecked6: string = 'yes';
  isChecked7: string = 'yes';
  isChecked8: string = 'yes';
  isChecked9: string = 'no';
  isChecked10: string = 'yes';
  isChecked11: string = 'yes';
  isChecked12: string = 'yes';
  isChecked13: string = 'yes';
  isChecked14: string = 'yes';
  isChecked15: string = 'yes';
  isChecked16: string = 'yes';
  isChecked17: string = 'yes';
  isChecked18: string = 'yes';
  isChecked19: string = 'yes';
  isChecked20: string = 'yes';
  isChecked21: string = 'yes';
  isChecked22: string = 'yes';
  isChecked23: string = 'yes';
  isChecked24: string = 'yes';
  isChecked25: string = 'yes';
  isChecked26: string = 'yes';
  isChecked27: string = 'yes';
  isChecked28: string = 'yes';
  isChecked29: string = 'yes';
  isChecked30: string = 'yes';
  isChecked31: string = 'yes';
  isChecked32: string = 'yes';
  isChecked33: string = 'yes';
  isChecked34: string = 'yes';
  isChecked35: string = 'yes';

  filterToggle = false;
  gridToggle = false;



  values = [];
  collapsed1 = false;
  collapsed2 = false;
  collapsed3 = false;
  collapsed4 = false;
  collapsed5 = false;
  collapsed6 = false;
  collapsed7 = false;
  collapsed8 = false;
  collapsed9 = false;
  collapsed10 = false;




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

  color1() {
    this.isChecked1 = 'no'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'yes'
    this.isChecked5 = 'yes'
  }

  color2() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'no'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'yes'
    this.isChecked5 = 'yes'
  }
  color3() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'no'
    this.isChecked4 = 'yes'
    this.isChecked5 = 'yes'
  }
  color4() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'no'
    this.isChecked5 = 'yes'
  }
  color5() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'yes'
    this.isChecked3 = 'yes'
    this.isChecked4 = 'no'
    this.isChecked5 = 'yes'
  }
  color6() {
    this.isChecked6 = 'no'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'

  }
  color7() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'no'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'

  }
  color8() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'no'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }
  color9() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'no'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'

  }
  color10() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'no'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'

  }
  color11() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'no'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color12() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'no'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }


  color13() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'no'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color14() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'no'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }


  color15() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'no'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }


  color16() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'no'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }



  color17() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'no'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }


  color18() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'no'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color19() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'no'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color20() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'no'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color21() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'no'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color22() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'no'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }


  color23() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'no'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color24() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'no'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color25() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'no'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color26() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'no'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color27() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'no'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color28() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'no'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color29() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'no'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color30() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'no'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color31() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'no'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color32() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'no'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color33() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'no'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'yes'
  }

  color34() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'no'
    this.isChecked35 = 'yes'
  }

  color35() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
    this.isChecked13 = 'yes'
    this.isChecked14 = 'yes'
    this.isChecked15 = 'yes'
    this.isChecked16 = 'yes'
    this.isChecked17 = 'yes'
    this.isChecked18 = 'yes'
    this.isChecked19 = 'yes'
    this.isChecked20 = 'yes'
    this.isChecked21 = 'yes'
    this.isChecked22 = 'yes'
    this.isChecked23 = 'yes'
    this.isChecked24 = 'yes'
    this.isChecked25 = 'yes'
    this.isChecked26 = 'yes'
    this.isChecked27 = 'yes'
    this.isChecked28 = 'yes'
    this.isChecked29 = 'yes'
    this.isChecked30 = 'yes'
    this.isChecked31 = 'yes'
    this.isChecked32 = 'yes'
    this.isChecked33 = 'yes'
    this.isChecked34 = 'yes'
    this.isChecked35 = 'no'
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





