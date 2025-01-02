import { ObjImageDialogComponent } from './obj-image-dialog/obj-image-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-obj-setup-modules-checkpoints',
  templateUrl: './obj-setup-modules-checkpoints.component.html',
  styleUrls: ['./obj-setup-modules-checkpoints.component.scss']
})
export class ObjSetupModulesCheckpointsComponent implements OnInit {

  filterToggle = false;
  gridToggle = false;
  Status =
    [{ name: 'Active', value: true },
    { name: "Inactive", value: false }];

  constructor(
    public dialog: MatDialog,
    public router: Router) { }

  values = []
  hidden = false;
  url = "/assets/carrear.jpeg"
  Image: any = '/assets/car.png';

  // values1 = [
  //   { title: 'Back Rear Grill', image: "/assets/part1.png", checkpoints: '3', },
  //   { title: 'Front right head lamp', image: "/assets/part2.png", checkpoints: '7', },
  //   { title: 'Back Rear tail lamp', image: "/assets/part3.png", checkpoints: '2', },
  //   { title: 'Front Bumper section', image: "/assets/part5.png", checkpoints: '4', },

  // ]

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }


  values1 = [
    { audit: '200', module: 'Left Fender', checkpoint: '100', min: '10x10', max: '10', status: true, image: "/assets/part1.png" },
    { audit: '961', module: 'Front', checkpoint: '70', min: '10x10', max: '10', status: true, image: "/assets/part1.png" },
    { audit: '10', module: 'Right Fender', checkpoint: '89', min: '10x10', max: '10', status: true, image: "/assets/cardoor.png" },
    { audit: '50', module: 'Right Body', checkpoint: '90', min: '10x10', max: '10', image: "/assets/cardoor.png" },
    { audit: '290', module: 'Trunk', checkpoint: '60', min: '10x10', max: '10', status: true, image: "/assets/part1.png" },
    { audit: '982', module: 'Left Body', checkpoint: '90', min: '10x10', max: '10', status: true, image: "/assets/part1.png" },
    { audit: '781', module: 'Left Frant Door', checkpoint: '100', min: '10x10', max: '10', status: true, image: "/assets/cardoor.png" },
    { audit: '108', module: 'Right Frant Door', checkpoint: '80', min: '10x10', max: '10', status: true, image: "/assets/cardoor.png" },

  ]
  opendashboard() {
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  addcheckpoint(item) {
    this.router.navigate(['/app/setup/subjective/overview']);
    // window.open('/#/parameter-dashboard/issuelog-par');
    // this.dialog.open(AddCheckpointComponent, {
    //   data: item,
    //   width: "600px",
    //   height: "auto"
    // })
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  imageSource(val) {
    this.Image = val;
    this.hidden = true;
    // this.hidden = !this.hidden;
    //console.log(this.Image)
    this.dialog.open(ObjImageDialogComponent, {
      width: "600px",
      height: "auto"
    })

  }
  openUploadCSV() {

  }

  downloadSampleExcel() {

  }


}
