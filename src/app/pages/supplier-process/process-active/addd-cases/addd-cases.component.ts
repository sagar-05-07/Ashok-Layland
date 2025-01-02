import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addd-cases',
  templateUrl: './addd-cases.component.html',
  styleUrls: ['./addd-cases.component.scss']
})
export class AdddCasesComponent implements OnInit {

  nowList: any;
  nextList: any;
  nowPageList: any;
  nextPageList: any;

  public nowpageSize = 5;
  public nowcurrentPage = 0;
  public nowtotalSize = 0;
  public nextpageSize = 5;
  public nextcurrentPage = 0;
  public nexttotalSize = 0;
  public page: any;
  nowshowEmpty: boolean = false;

  nextshowEmpty: boolean = false;
  public leadId: any;
  public leadName: any;
  oppId: any;
  addAccountForm: FormGroup;
  fromCity = false;
  addLeadForm: FormGroup;
  addTimelineForm: FormGroup;
  checklistForm: FormGroup;
  nowNextForm: FormGroup;
  addQualificationForm: FormGroup;
  canUpdate: any;
  canDelete: any;
  solutionsForm: FormGroup;
  public form: FormGroup;
  isLinear = true
  public defaultColorId: number;
  industryOptions: any;
  accountOptions: any;
  campaignOptions: any;
  checklistdata: Array<any> = [];
  solutionsdata = [];
  public role_id = "0";
  bdmsOptions: any;
  pdOptions: any;
  sdOptions: any;
  public countryList: any;
  public stateList: any;
  public cityList: any;
  public checklists: any;
  public totalCampaigns: any;
  notesForm: FormGroup;
  timezones: any;
  count: any;
  solutioncount: any;
  solutionchecked_count: any;
  checked_count: any;
  all_checked: boolean;
  sol_all_checke: boolean;
  IndustryIDToFetChecklist: any;
  addStep = 1;
  step = 1;
  updatestep = 1;
  updateStep = 1
  solLoader = true;
  refLoader = true;
  Accounts: any;
  showEmpty: boolean = true;
  qualification: any;


  totalSize: 0;
  currentPage: 0;
  pageSize: 0;

  values = [
    { name: "Accepted As it Is", TargetDate: "29-01-2024", industry: "Information Technology", status: true },
    { name: "Design Modification", TargetDate: "30-02-2024", industry: "Information Technology", status: true },
    { name: "Open", TargetDate: "06-03-2024", industry: "Information Technology", status: true },
  ];


  changeAddStep(value: any) {
    this.addStep = value;
  }

  changeUpdateStep(value: any) {
    this.updateStep = value;
  }

  ChangeStep(value: any) {
    this.step = value;
  }

  ChangeUpdateStep(value: any) {
    this.updatestep = value;
  }





  potentialOptions = [
    { id: 1, value: 'High' },
    { id: 2, value: 'Medium' },
    { id: 3, value: 'Low' },
  ]
  timeZoneOptions = [
    { id: 1, value: "GMT" },
    { id: 2, value: "IST" },
    { id: 3, value: "CST" },
    { id: 4, value: "MST" },
    { id: 5, value: "PST" },
    { id: 6, value: "EDT" },
    { id: 7, value: "CDT" },
    { id: 8, value: "MDT" },
    { id: 9, value: "PDT" }
  ];
  action: any;
  Frameworks: any;
  industries: any;
  accounts: any;
  leadsamples: any[];
  bdm_id: any;
  colorCodes: any;
  segmentOptions: any[];
  newArray: any = [];
  campainTypeOptions: any;
  CountryIDToFetChecklist: any;
  campaignNameModel: any;
  getLeadGenerationList: any;
  getAccountGenerationList: any;
  artefactList: any[];
  projectSelectionArray = [];
  leftBoxItems: string[] = ['Item 1', 'Item 2', 'Item 3']; // Sample initial data
  rightBoxItems: string[] = [];

  moveRight() {
    // Move selected items from left to right
    for (let i = this.leftBoxItems.length - 1; i >= 0; i--) {
      if (this.leftBoxItems[i]) {
        this.rightBoxItems.push(this.leftBoxItems[i]);
        this.leftBoxItems.splice(i, 1);
      }
    }
  }

  moveLeft() {
    // Move selected items from right to left
    for (let i = this.rightBoxItems.length - 1; i >= 0; i--) {
      if (this.rightBoxItems[i]) {
        this.leftBoxItems.push(this.rightBoxItems[i]);
        this.rightBoxItems.splice(i, 1);
      }
    }
  }
  constructor(

    public dialogRef: MatDialogRef<AdddCasesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public dialog: MatDialog,

  ) {

  }



  ngOnInit() {



  }







  createLeadForm() {

    this.addLeadForm = this.fb.group({

      selectType: new FormControl("", [
        Validators.required,
      ]),
      selectLocation: new FormControl("", [
        Validators.maxLength(30),
        Validators.required

      ]),
      addAccountName: new FormControl("", [
        Validators.maxLength(30),
        Validators.required
      ]),
      // addStateName: new FormControl("", [
      //   Validators.maxLength(30),
      // ]),
      // city: new FormControl("", [
      //   Validators.maxLength(30),
      //   Validators.required
      // ]),
      selectIndustry: new FormControl("", [
        Validators.maxLength(30),
        Validators.required

      ]),
      selectCampaign: new FormControl("", [


      ]),
      // selectFramework: new FormControl("", [
      //   Validators.maxLength(30),
      //   Validators.required
      // ]),
      // addSegment: new FormControl("", [
      //   Validators.maxLength(30),
      //   Validators.required
      // ]),
      leadurl: new FormControl(""),
      addUserEmail: new FormControl('', [Validators.email]),
      addUserNumber: new FormControl('', [Validators.minLength(10), Validators.maxLength(15), Validators.pattern(/^[0-9!@#$&()`.+,/"-]*$/)]),
      // selectLeadsample: new FormControl("", [
      //   Validators.maxLength(50),
      //   Validators.required
      // ]),
      selectBdm: new FormControl("", [
        Validators.maxLength(30),
        Validators.required
      ]),
      potential: new FormControl(""),
      // selectPd: new FormControl("", [
      //   Validators.maxLength(30),
      //   Validators.required
      // ]),
      // selectSd: new FormControl("", [
      //   Validators.maxLength(30),
      //   Validators.required
      // ]),
      head: new FormControl(""),
      addcontact: new FormControl("", [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]),


      leadgen: new FormControl("", [Validators.required]),

    });

  }

  noWhiteSpaceValidator(control: FormControl) {
    let isWhiteSpace = (control.value || "").trim().length === 0;
    let isValid = !isWhiteSpace;
    return isValid ? null : { whitespace: true };
  }



  saveLead() {

  }

  // saveLead(){
  //   console.log(this.addLeadForm.valid)
  //   console.log(this.addLeadForm.value)

  // }

  //special Functions
  clearSearchInput() {

  }


  close(): void {
    this.dialogRef.close();
  }
}

