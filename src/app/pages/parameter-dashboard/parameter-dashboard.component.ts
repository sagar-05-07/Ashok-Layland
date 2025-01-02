import { Router } from '@angular/router';
import { routes } from './../setup/subjective-setup/subjective-setup.module';
import { Component, OnInit } from '@angular/core';
import { AddParameterComponent } from './add-parameter/add-parameter.component';
import { MatDialog } from '@angular/material/dialog';
import { AddDocsComponent } from '../subjective-audits/capa/add-docs/add-docs.component';

@Component({
  selector: 'app-parameter-dashboard',
  templateUrl: './parameter-dashboard.component.html',
  styleUrls: ['./parameter-dashboard.component.scss']
})
export class ParameterDashboardComponent implements OnInit {

  filterToggle = false;
  isChecked1: string = 'no';
  isChecked2: string = 'yes';
  isChecked3: string = 'yes';
  isChecked4: string = 'yes';
  isChecked5: string = 'yes';
  isChecked6: string = 'no';
  isChecked7: string = 'yes';
  isChecked8: string = 'yes';
  isChecked9: string = 'yes';
  isChecked10: string = 'yes';
  isChecked11: string = 'yes';
  isChecked12: string = 'yes';

  constructor(
    public routes: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
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
    this.isChecked4 = 'yes'
    this.isChecked5 = 'no'
  }
  color6() {
    this.isChecked6 = 'no'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
  }
  color7() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'no'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'

  }
  color8() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'no'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'
  }
  color9() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'no'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'

  }
  color10() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'no'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'yes'

  }
  color11() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'no'
    this.isChecked12 = 'yes'

  }
  color12() {
    this.isChecked6 = 'yes'
    this.isChecked7 = 'yes'
    this.isChecked8 = 'yes'
    this.isChecked9 = 'yes'
    this.isChecked10 = 'yes'
    this.isChecked11 = 'yes'
    this.isChecked12 = 'no'
  }


  // Example Data for the Angular Component
  values1 = [
    {
      parameter: 'UTER DIAMETER',
      spec: '457.0±0.8 ',
      min: 23,
      max: 27,
      special: 'General',
      method: 'Thermocouple',
      s1: '24.5',
      s2: '25.0',
      s3: '26.0',
      s4: '25.5',
      s5: '24.8',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      done: false
    },
    {
      parameter: 'OTAL LENGTH',
      spec: '4.747 / 34.798',
      min: 6.5,
      max: 7.5,
      special: 'General',
      method: 'pH Meter',
      s1: '7.1',
      s2: '6.9',
      s3: '7.2',
      s4: '6.8',
      s5: '7.0',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      done: true
    },
    {
      parameter: 'WIDTH',
      spec: '20.0±0.2',
      min: 1000,
      max: 2000,
      special: 'General',
      method: 'Conductivity Meter',
      s1: '1400',
      s2: '1500',
      s3: '1600',
      s4: '1550',
      s5: '1450',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      done: false
    },
    {
      parameter: 'ACE TO HOLE CENTER',
      spec: '5.0±0.3',
      min: 7.0,
      max: 9.0,
      special: 'General',
      method: 'DO Meter',
      s1: '8.2',
      s2: '7.8',
      s3: '8.0',
      s4: '7.5',
      s5: '8.1',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      done: true
    },
    {
      parameter: 'ACE TO GROOVE CENTER',
      spec: '0.0±0.2 ',
      min: 0,
      max: 10,
      special: 'General',
      method: 'MICROMETER',
      s1: '3.0',
      s2: '4.5',
      s3: '5.0',
      s4: '2.5',
      s5: '3.5',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      done: false
    }
  ];




  opendashboard() {
    window.open('/#/app/checklistdoard');
  }
  // opendashboard() {
  //   window.open('../demerit');
  // }

  ///#/app/parameterboard has been changed to /app/checklistdoard

  addgrid() {
    // this.dialog.open(ManageGridComponent,{
    //   width:"600px",
    //   height:"auto"
    // })
  }
  // addParameter(){
  //   this.dialog.open(AddparameterauditComponent,{
  //     width:"600px",
  //     height:"auto"
  //   })
  // }
  addParameter() {
    let dialogRef = this.dialog.open(AddParameterComponent, {
      // data: auditdata,
      height: 'auto',
      width: '950px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


  openDocs() {
    this.dialog.open(AddDocsComponent, {
      height: 'auto',
      width: '600px'
    })
  }

  opendashboard1() {
    window.open('/#/app/actions');
  }

  back() {
    this.routes.navigate(['/app/new-audits/objective-audits/objective-audits-issues-status']);
  }

}
