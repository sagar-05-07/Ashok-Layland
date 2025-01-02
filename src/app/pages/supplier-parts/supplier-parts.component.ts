import { Component, OnInit } from '@angular/core';
import { AdddCasesComponent } from '../supplier-process/process-active/addd-cases/addd-cases.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-supplier-parts',
  templateUrl: './supplier-parts.component.html',
  styleUrls: ['./supplier-parts.component.scss']
})
export class SupplierPartsComponent implements OnInit {


  innerscreenname: string = "Overview"
  status = "";
  daily(item) {
    this.innerscreenname = item;
  }
  values = [
    { contactsCount: "1", docs: "0", select: false, handover: "3/12", closure: "2/5", reports: "12", ProjectArea: "4000", clientName: "Sandeep Kumar", GSTNumber: "27AASCU9603R1ZN", ProjectName: "Dr.Reddys", POReference: "27AASCU9603R1ZN", POReceivedDate: "12/11/2021", POLOIDate: "13/11/2021", POValue: "₹2,50,00,000", InsuranceDetails: "DDAASCU9603R1ZN", StartDate: "13/11/2021", TargetDate: "14/11/2021", ScopeofWork: "Supply of Milliken carpet and LVT", PMCName: "Unispace Architects", ArchitectName: "Unispace Architects", ProjectAddress: "Ground floor,  Luxor - South tower, Doddanekkundi,", ProjectCity: "Hyderabad", ProjectState: "Telangana", ProjectPIN: "500072", BillingAddress: "-", BillingCity: "Hyderabad", BillingState: "Telangana", BillingPIN: "50072", BillingNotes: "-", ShippingAddress: "Ground floor, Bagmane Luxor - South tower, Doddanekkundi,", ShippingCity: "Hyderabad", ShippingState: "Telangana", ShippingPIN: "500086", CostConsultantName: "NA", CostConsultantEmail: "NA", CostConsultantLandline: "040-45355", CostConsultantMobile: "9989764532", ClientName: "Mr. Sandeep ", ClientEmail: "mailto:sandeep@exoticinnovations.in", ClientLandline: "91 080-41206629", ClientMobile: "9900086643", ProjectDirector: "Mr. Venkatesh", ProjectManager: "Mr. Lance/Mr. Dinesh.K", ProjectCode: "QWW5FA10012", SOW: "Add", BG: "View", BOCW: "Add" },
    // { contactsCount: "7", docs: "0", select: false, handover: "3/12", closure: "2/5", reports: "4", ProjectArea: "2000", clientName: "Suresh Reddy", GSTNumber: "57AABDS5603R1ZN", ProjectName: "Raheja", POReference: "37A456339603R1ZN", POReceivedDate: "13/11/2021", POLOIDate: "14/11/2021", POValue: "₹1,40,00,000", InsuranceDetails: "44AASCU9603R1ZN", StartDate: "14/11/2021", TargetDate: "15/11/2021", ScopeofWork: "Supply of Wood carpet and PVT", PMCName: "Unispace Architects", ArchitectName: "Unispace Architects", ProjectAddress: "First floor, Bagmane Luxor -  tower, Doddanekkundi,", ProjectCity: "Warangal", ProjectState: "AP", ProjectPIN: "500072", BillingAddress: "-", BillingCity: "Hyderabad", BillingState: "Telangana", BillingPIN: "50072", BillingNotes: "-", ShippingAddress: "Ground floor, Bagmane Luxor - South tower, Doddanekkundi,", ShippingCity: "Hyderabad", ShippingState: "Telangana", ShippingPIN: "500086", CostConsultantName: "NA", CostConsultantEmail: "NA", CostConsultantLandline: "040-45355", CostConsultantMobile: "9989764532", ClientName: "Mr. Sandeep ", ClientEmail: "mailto:sandeep@exoticinnovations.in", ClientLandline: "91 080-41206629", ClientMobile: "9900086643", ProjectDirector: "Mr. Venkatesh", ProjectManager: "Mr. Lance/Mr. Dinesh.K", ProjectCode: "K095KA10012", SOW: "View", BG: "View", BOCW: "Add" },
    // { contactsCount: "1", docs: "0", select: false, handover: "3/12", closure: "2/5", reports: "1", ProjectArea: "5000", clientName: "Sandeep ", GSTNumber: "47AABCU9603R1ZN", ProjectName: "TATA", POReference: "47A456339603R1ZN", POReceivedDate: "14/11/2021", POLOIDate: "15/11/2021", POValue: "₹1,50,00,000", InsuranceDetails: "27AASCU9603R1ZN", StartDate: "16/11/2021", TargetDate: "17/11/2021", ScopeofWork: "Supply of Milliken carpet and LVT", PMCName: "Unispace Architects", ArchitectName: "Unispace Architects", ProjectAddress: "Ground floor,  Luxor - South tower, ,", ProjectCity: "Hyderabad", ProjectState: "Telangana", ProjectPIN: "500072", BillingAddress: "-", BillingCity: "Hyderabad", BillingState: "Telangana", BillingPIN: "50072", BillingNotes: "-", ShippingAddress: "Ground floor, Bagmane Luxor - South tower, Doddanekkundi,", ShippingCity: "Hyderabad", ShippingState: "Telangana", ShippingPIN: "500086", CostConsultantName: "NA", CostConsultantEmail: "NA", CostConsultantLandline: "040-45355", CostConsultantMobile: "9989764532", ClientName: "Mr. Sandeep ", ClientEmail: "mailto:sandeep@exoticinnovations.in", ClientLandline: "91 080-41206629", ClientMobile: "9900086643", ProjectDirector: "Mr. Venkatesh", ProjectManager: "Mr. Lance/Mr. Dinesh.K", ProjectCode: "L705KA10012", SOW: "View", BG: "View", BOCW: "Add" },
    // { contactsCount: "2", docs: "0", select: false, handover: "3/12", closure: "2/5", reports: "11", ProjectArea: "6000", clientName: "Suresh", GSTNumber: "87AASCU9603R1ZN", ProjectName: "Amul", POReference: "57A456339603R1ZN", POReceivedDate: "12/01/2021", POLOIDate: "12/11/2021", POValue: "₹2,50,00,000", InsuranceDetails: "27AASCU9603R1ZN", StartDate: "17/11/2021", TargetDate: "18/11/2021", ScopeofWork: "Supply of Milliken carpet and LVT", PMCName: "Unispace Architects", ArchitectName: "Unispace Architects", ProjectAddress: "First floor, Bagmane Luxor - South tower, ,", ProjectCity: "Hyderabad", ProjectState: "AP", ProjectPIN: "500072", BillingAddress: "-", BillingCity: "Hyderabad", BillingState: "Telangana", BillingPIN: "50072", BillingNotes: "-", ShippingAddress: "Ground floor, Bagmane Luxor - South tower, Doddanekkundi,", ShippingCity: "Hyderabad", ShippingState: "Telangana", ShippingPIN: "500086", CostConsultantName: "NA", CostConsultantEmail: "NA", CostConsultantLandline: "040-45355", CostConsultantMobile: "9989764532", ClientName: "Mr. Sandeep ", ClientEmail: "mailto:sandeep@exoticinnovations.in", ClientLandline: "91 080-41206629", ClientMobile: "9900086643", ProjectDirector: "Mr. Venkatesh", ProjectManager: "Mr. Lance/Mr. Dinesh.K", ProjectCode: "L#05KA10012", SOW: "Add", BG: "Add", BOCW: "View" },
    // { contactsCount: "3", docs: "0", select: false, handover: "3/12", closure: "2/5", reports: "11", ProjectArea: "7000", clientName: "Rajesh ", GSTNumber: "67ASBCS9603R1ZN", ProjectName: "Relience", POReference: "77A456339603R1ZN", POReceivedDate: "11/11/2021", POLOIDate: "13/11/2021", POValue: "₹1,70,00,000", InsuranceDetails: "27ASERRU9603R1ZN", StartDate: "13/11/2021", TargetDate: "14/11/2021", ScopeofWork: "upply of Wood carpet and PVT", PMCName: "Unispace Architects", ArchitectName: "Unispace Architects", ProjectAddress: "Ground floor,  Luxor - South tower, Doddanekkundi,", ProjectCity: "Warangal", ProjectState: "Telangana", ProjectPIN: "500072", BillingAddress: "-", BillingCity: "Hyderabad", BillingState: "Telangana", BillingPIN: "50072", BillingNotes: "-", ShippingAddress: "Ground floor, Bagmane Luxor - South tower, Doddanekkundi,", ShippingCity: "Hyderabad", ShippingState: "Telangana", ShippingPIN: "500086", CostConsultantName: "NA", CostConsultantEmail: "NA", CostConsultantLandline: "040-45355", CostConsultantMobile: "9989764532", ClientName: "Mr. Sandeep ", ClientEmail: "mailto:sandeep@exoticinnovations.in", ClientLandline: "91 080-41206629", ClientMobile: "9900086643", ProjectDirector: "Mr. Venkatesh", ProjectManager: "Mr. Lance/Mr. Dinesh.K", ProjectCode: "ED05KA10012", SOW: "Add", BG: "View", BOCW: "Add" },
    // { contactsCount: "1", docs: "0", select: false, handover: "3/12", closure: "2/5", reports: "13", ProjectArea: "4000", clientName: "Sandeep ", GSTNumber: "27AASCU9603R1ZN", ProjectName: "Dr.Reddys", POReference: "27AASCU9603R1ZN", POReceivedDate: "12/11/2021", POLOIDate: "13/11/2021", POValue: "₹2,50,00,000", InsuranceDetails: "DDAASCU9603R1ZN", StartDate: "13/11/2021", TargetDate: "14/11/2021", ScopeofWork: "Supply of Milliken carpet and LVT", PMCName: "Unispace Architects", ArchitectName: "Unispace Architects", ProjectAddress: "Ground floor, Bagmane  - South tower, ,", ProjectCity: "Hyderabad", ProjectState: "Telangana", ProjectPIN: "500072", BillingAddress: "-", BillingCity: "Hyderabad", BillingState: "Telangana", BillingPIN: "50072", BillingNotes: "-", ShippingAddress: "Ground floor, Bagmane Luxor - South tower, Doddanekkundi,", ShippingCity: "Hyderabad", ShippingState: "Telangana", ShippingPIN: "500086", CostConsultantName: "NA", CostConsultantEmail: "NA", CostConsultantLandline: "040-45355", CostConsultantMobile: "9989764532", ClientName: "Mr. Sandeep ", ClientEmail: "mailto:sandeep@exoticinnovations.in", ClientLandline: "91 080-41206629", ClientMobile: "9900086643", ProjectDirector: "Mr. Venkatesh", ProjectManager: "Mr. Lance/Mr. Dinesh.K", ProjectCode: "E405FA10012", SOW: "Add", BG: "View", BOCW: "Add" },
    // { contactsCount: "6", docs: "0", select: true, handover: "3/12", closure: "2/5", reports: "7", ProjectArea: "2000", clientName: "Suresh", GSTNumber: "57AABDS5603R1ZN", ProjectName: "Raheja", POReference: "37A456339603R1ZN", POReceivedDate: "13/11/2021", POLOIDate: "14/11/2021", POValue: "₹1,50,00,000", InsuranceDetails: "44AASCU9603R1ZN", StartDate: "14/11/2021", TargetDate: "15/11/2021", ScopeofWork: "upply of Wood carpet and PVT", PMCName: "Unispace Architects", ArchitectName: "Unispace Architects", ProjectAddress: "Ground floor,  Luxor - South tower, Doddanekkundi,", ProjectCity: "Warangal", ProjectState: "AP", ProjectPIN: "500072", BillingAddress: "-", BillingCity: "Hyderabad", BillingState: "Telangana", BillingPIN: "50072", BillingNotes: "-", ShippingAddress: "Ground floor, Bagmane Luxor - South tower, Doddanekkundi,", ShippingCity: "Hyderabad", ShippingState: "Telangana", ShippingPIN: "500086", CostConsultantName: "NA", CostConsultantEmail: "NA", CostConsultantLandline: "040-45355", CostConsultantMobile: "9989764532", ClientName: "Mr. Sandeep ", ClientEmail: "mailto:sandeep@exoticinnovations.in", ClientLandline: "91 080-41206629", ClientMobile: "9900086643", ProjectDirector: "Mr. Venkatesh", ProjectManager: "Mr. Lance/Mr. Dinesh.K", ProjectCode: "FD05KA10012", SOW: "View", BG: "View", BOCW: "Add" },

  ]

  showmoredetails(items) {
    this.innerscreenname = "Overview";
    if (items.ProjectCode.toString() != this.status) {
      this.status = items.ProjectCode;
    }
    else {
      this.status = '';
    }
  }



  isCardView: boolean = true;
  toggleButtonText() {
    this.isCardView = !this.isCardView;
  }
  filterForm: FormGroup;
  eventTypes: string[] = ['Tim Cook', 'Kim Johnson', 'Maria', 'Sophia Kelly'];
  filteredEventTypes: string[] = [...this.eventTypes];
  selectedEventType: string | null = null;
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredEventTypes = this.eventTypes.filter(eventType => eventType.toLowerCase().includes(filterValue));
  }
  filterToggle: boolean;
  years: number[] = [2021, 2022, 2023, 2024];
  public currentPage = 0;
  public totalSize = 0;
  custodians: string[] = ['John Wick', 'Johnson', 'Carlsen'];
  entities: string[] = ['Hamilton Hospital-A', 'Memorial Hospital-A', 'Concho County-A'];
  reqTypes: string[] = ['Medical', 'Billing', 'Imaging'];
  activeChart: string = 'monthly';
  months = [
    { value: '01', viewValue: 'January' },
    { value: '02', viewValue: 'February' },
    { value: '03', viewValue: 'March' },
    { value: '04', viewValue: 'April' },
    { value: '05', viewValue: 'May' },
    { value: '06', viewValue: 'June' },
    { value: '07', viewValue: 'July' },
    { value: '08', viewValue: 'August' },
    { value: '09', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' }
  ];
  Cases = [{ subject: 'Car accident on Adam Family Expressway in April 2024', caseref: '76654', requests: '3', patients: '6', remarks: 'A car accident occurred on the Adam Family Expressway, causing significant disruption to traffic flow.' },
  { subject: 'Fall from ladder at construction site in May 2024', caseref: '96387', requests: '1', patients: '1', remarks: 'In May 2024, a fall from a ladder at a construction site resulted in injuries. Immediate medical attention was provided' },
  { subject: 'Sports injury during football game in May 2024', caseref: '12547', requests: '2', patients: '3', remarks: 'A sports injury occurred during a football game. The injured player received prompt medical attention and is currently undergoing treatment. ' },
  { subject: 'Slip and fall accident at supermarket in March 2024', caseref: '23587', requests: '4', patients: '5', remarks: 'In March 2024, a slip and fall accident occurred at a supermarket, resulting in injuries. ' },
  { subject: 'Fall from ladder at construction site in May 2024', caseref: '75632', requests: '5', patients: '7', remarks: 'In May 2024, a fall from a ladder at a construction site resulted in injuries.' },
  { subject: 'Car accident on Adam Family Expressway in April 2024', caseref: '85274', requests: '7', patients: '3', remarks: 'In April 2024, a car accident occurred on the Adam Family Expressway, leading to significant traffic disruptions. ' },
  ]
  records = [
    { name: 'John Doe', date: '12/06/2024' },
    { name: 'Jane Smith', date: '13/06/2024' },
    { name: 'Sam Brown', date: '14/06/2024' },
    { name: 'Lisa Ray', date: '15/06/2024' },
    { name: 'Paul White', date: '16/06/2024' }
  ];
  records1 = [
    { name: 'Michael Johnson', date: '17/06/2024' },
    { name: 'Emily Davis', date: '18/06/2024' },
    { name: 'David Wilson', date: '19/06/2024' },
    { name: 'Sarah Miller', date: '20/06/2024' },
    { name: 'James Anderson', date: '21/06/2024' }
  ];

  pendingTasks = [
    { name: '2024 / Process / 1297', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 20, status: 'Pending', eta: '06/15/2023', color: '#FFA500', innerColor: '#FFD700' },
    { name: '2024 / Process / 2598', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 75, status: 'In Progress', eta: '05/05/2023', color: '#78C000', innerColor: '#C7E596' },
    { name: '2024 / Process / 3147', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 100, status: 'Completed', eta: '05/01/2023', color: '#32CD32', innerColor: '#98FB98' },
    { name: '2024 /  Process / 1785', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 60, status: 'Complaint', eta: '04/03/2023', color: '#DC143C', innerColor: '#FF4500' }
  ];

  inProgressTasks = [
    { name: '2024 / Process / 4012', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 10, status: 'Pending', eta: '04/28/2023', color: '#FFA500', innerColor: '#FFD700' },
    { name: '2024 / Process / 5196', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 50, status: 'In Progress', eta: '06/30/2023', color: '#FF6347', innerColor: '#FF8C00' },
    { name: '2024 /Process / 6732', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 100, status: 'Completed', eta: '03/25/2023', color: '#32CD32', innerColor: '#98FB98' },
    { name: '2024 / Process / 5487', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 70, status: 'Complaint', eta: '03/14/2023', color: '#DC143C', innerColor: '#FF4500' }
  ];

  completedTasks = [
    { name: '2024 / Process / 1054', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 30, status: 'Pending', eta: '05/10/2023', color: '#FFA500', innerColor: '#FFD700' },
    { name: '2024 / Process / 2178', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 60, status: 'In Progress', eta: '04/18/2023', color: '#FF6347', innerColor: '#FF8C00' },
    { name: '2024 / Process / 4692', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 100, status: 'Completed', eta: '04/12/2023', color: '#32CD32', innerColor: '#98FB98' },
    { name: '2024 / Process / 3315', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 80, status: 'Complaint', eta: '06/26/2023', color: '#DC143C', innerColor: '#FF4500' }
  ];

  complaintTasks = [
    { name: '2024 / Process / 2143', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 40, status: 'Pending', eta: '03/22/2023', color: '#FFA500', innerColor: '#FFD700' },
    { name: '2024 / Process / 6123', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 90, status: 'In Progress', eta: '05/22/2023', color: '#00BFFF', innerColor: '#1E90FF' },
    { name: '2024 / Process / 8219', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 100, status: 'Completed', eta: '06/29/2023', color: '#32CD32', innerColor: '#98FB98' },
    { name: '2024 / Process / 7865', providername: 'DFM - Automated NO / NO GO gauge needed', percent: 90, status: 'Complaint', eta: '05/08/2023', color: '#DC143C', innerColor: '#FF4500' }
  ];
  constructor(public dialog: MatDialog, public router: Router,) {

  }
  ngOnInit(): void {



  }

  opencasedialog() {
    this.dialog.open(AdddCasesComponent, {
      width: "1000px",
      height: "auto"
    });
  }

  redirect1() {
    this.router.navigate(['/request/patients-requestor']);
  }

  redirect() {
    this.router.navigate(['/request/requests-requestor']);
  }

  values1 = [
    {
      auditReference: 'AR123456',
      auditType: 'Process Audit',
      commodity: 'Commodity A',
      partsFamily: 'Family A',
      notes: 'No issues found',
      docs: 'Document A',
      description: 'Description of audit A',
      issueDate: '01-Oct-2024',
      dueDate: '10-Oct-2024',
      color: 'Red',
      done: false,
      status: true
    },
    {
      auditReference: 'AR789101',
      auditType: 'Parts Audit',
      commodity: 'Commodity B',
      partsFamily: 'Family B',
      notes: 'Minor issue',
      docs: 'Document B',
      description: 'Description of audit B',
      issueDate: '02-Oct-2024',
      dueDate: '15-Oct-2024',
      color: 'Blue',
      done: true,
      status: false
    },
    {
      auditReference: 'AR112233',
      auditType: 'Safety Audit',
      commodity: 'Commodity C',
      partsFamily: 'Family C',
      notes: 'Safety procedures not followed',
      docs: 'Document C',
      description: 'Description of audit C',
      issueDate: '05-Oct-2024',
      dueDate: '12-Oct-2024',
      color: 'Green',
      done: false,
      status: true
    },
    {
      auditReference: 'AR445566',
      auditType: 'Quality Audit',
      commodity: 'Commodity D',
      partsFamily: 'Family D',
      notes: 'Quality standards met',
      docs: 'Document D',
      description: 'Description of audit D',
      issueDate: '08-Oct-2024',
      dueDate: '18-Oct-2024',
      color: 'Yellow',
      done: false,
      status: true
    },
    {
      auditReference: 'AR778899',
      auditType: 'Compliance Audit',
      commodity: 'Commodity E',
      partsFamily: 'Family E',
      notes: 'Compliance issue with safety protocols',
      docs: 'Document E',
      description: 'Description of audit E',
      issueDate: '10-Oct-2024',
      dueDate: '20-Oct-2024',
      color: 'Orange',
      done: false,
      status: false
    },
    {
      auditReference: 'AR998877',
      auditType: 'Process Audit',
      commodity: 'Commodity F',
      partsFamily: 'Family F',
      notes: 'No major issues',
      docs: 'Document F',
      description: 'Description of audit F',
      issueDate: '15-Oct-2024',
      dueDate: '25-Oct-2024',
      color: 'Purple',
      done: true,
      status: true
    },
    {
      auditReference: 'AR665544',
      auditType: 'Parts Audit',
      commodity: 'Commodity G',
      partsFamily: 'Family G',
      notes: 'Minor defects found',
      docs: 'Document G',
      description: 'Description of audit G',
      issueDate: '20-Oct-2024',
      dueDate: '30-Oct-2024',
      color: 'Brown',
      done: 'No',
      status: false
    },
    {
      auditReference: 'AR443322',
      auditType: 'Quality Audit',
      commodity: 'Commodity H',
      partsFamily: 'Family H',
      notes: 'All quality standards met',
      docs: 'Document H',
      description: 'Description of audit H',
      issueDate: '22-Oct-2024',
      dueDate: '01-Nov-2024',
      color: 'Pink',
      done: 'Yes',
      status: true
    }
  ];

}


