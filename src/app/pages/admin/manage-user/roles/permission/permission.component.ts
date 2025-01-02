import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  roleId = null;
  moduleId = 5;
  roleName: any;
  items = [];
  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };
  service: any;
  alertService: any;

  constructor(private _location: Location, public router: Router, private _activeRoute: ActivatedRoute, private location: Location,) {
    this.selectedModule = this.modules[0];
  }

  selectedModule: any;

  options: Array<any> = [
    { RoleName: "Submit Initiative", RoleId: 1 },
    { RoleName: "Approve Steps", RoleId: 2 },
    { RoleName: "Close Initiative", RoleId: 3 },
   // { RoleName: "Line 4", RoleId: 4 },
  ]

  public modules = [


    {
      name: 'Radar and PRTS (2)',
      screens: [
        {
          screenName: 'Radar',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'PRTS >> Dashboard',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },
        {
          screenName: 'PRTS >> New Issue',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },
        {
          screenName: 'PRTS >> Issue Status',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },
        {
          screenName: 'PRTS >> Alerts (3)',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },
        {
          screenName: 'PRTS >> Archives',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },
        {
          screenName: 'PRTS >> Reports',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },
        {
          screenName: 'PRTS >> User Manual',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },
        {
          screenName: 'PRTS >> IT Help Desk',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

      ]
    },

    {
      name: 'Audits (8)',
      screens: [
        {
          screenName: 'Audits >> Obj Audit >> Main',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Audits >> Obj Audit >> Issue Log',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Audits >> Obj Audit >> Metrics',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Audits >> Obj Audit >> Notes',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Audits >> Subj Audit >> Main',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Audits >> Subj Audit >> Issue Log',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Audits >> Subj Audit >> Metrics',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Audits >> Subj Audit >> Notes',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },
      ]
    },


    {
      name: 'Setup (11) ',
      screens: [
        {
          screenName: 'Setup >> Obj Setup >> Category Master',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Setup >> Obj Setup >> Measure Master',
          cancel: false, import: false, export: true, email: false, report: false, print: false
        },

        {
          screenName: 'Setup >> Obj Setup >> Checkpoint Master',
          cancel: false, import: false, export: true, email: false, report: false, print: false
        },

        {
          screenName: 'Setup >> Obj Setup >> Audit Types',
          cancel: false, import: false, export: true, email: false, report: false, print: false
        },

        {
          screenName: 'Setup >> Obj Setup >> Monthly Targets',
          cancel: false, import: false, export: true, email: false, report: false, print: false
        },

        {
          screenName: 'Setup >> Subj Setup >> Module Master',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Setup >> Subj Setup >> Function Master',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Setup >> Subj Setup >> Defect Master',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Setup >> Subj Setup >> Issue Master',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Setup >> Subj Setup >> Audit Types',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Setup >> Subj Setup >> Montly Targets',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },


      ]
    },




    {
      name: 'Admin (14)',
      screens: [
        {
          screenName: 'Admin >> Roles & Users >> Users',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Roles & Users >> Roles',
          cancel: false, import: true, export: true, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Master Data >> Model Master',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Master Data >> Varient Master',
          cancel: false, import: true, export: true, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Master Data >> Location',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Master Data >> Agency Master',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Master Data >> Interior Trim',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Master Data >> Color',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Master Data >> PRTS Roles',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Master Data >> Transmission',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Master Data >> Fuel Type',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Lookup Options ',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Preferences ',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },

        {
          screenName: 'Admin >> Event Log ',
          cancel: false, import: false, export: false, email: false, report: false, print: false
        },


      ]
    },



  ]


  ngOnInit() {

    console.log('load roles')
    // this._activeRoute.paramMap.subscribe(v => {
    //   console.log(v.get("id"));
    //   if (v.get("id") !== null && v.get("id") !== undefined) {
    //     this. roleId = v.get("id");
    //     this.getPermissions(v.get("id"));

    //   }
    //   else{

    //   }
    // });
  }
  goback() {
    this._location.back();
  }
  getPermissions(id) {
    this.service.getRolePermissionsbyModule(id).subscribe(
      data => {
        console.log(data);
        this.items = data['Data'];

        this.roleName = this.items[0]['RoleName'];
      }
    )
  }
  recordChange(value) {

  }
  saveUserPermissions() {
    this.service.saveRolePermissions(this.items).subscribe(data => {
      if (data != null && data['Success']) {
        // this.items = data['Data'];
        this.alertService.createAlert('Permissions Saved Successfully', 1);
        this.getPermissions(this.roleId);
      }
      else {
        this.alertService.createAlert('Something Went Wrong! Please Try Again Later', 0);
      }
    })
  }
  next() {
    let index = 0;
    this.modules.forEach((x, i) => {
      if (this.selectedModule.name === x.name) {
        index = i
      }
    })
    if (index != (this.modules.length - 1))
      this.selectedModule = this.modules[index + 1]
  }
  previous() {
    let index = 0;
    this.modules.forEach((x, i) => {
      if (this.selectedModule.name === x.name) {
        index = i
      }
    })

    if (index != 0)
      this.selectedModule = this.modules[index - 1]
  }
}
