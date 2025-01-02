import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartsData } from 'src/app/pages/prts/PartsData';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subjective-alerts',
  templateUrl: './subjective-alerts.component.html',
  styleUrls: ['./subjective-alerts.component.scss']
})
export class SubjectiveAlertsComponent implements OnInit {

  filterToggle: boolean = false;
  totalSize: any;
  currentPage: any;
  pageSize: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    // if (environment.mode == 1) {
    //   this.values = PartsData.alert();
    // }
    // else {

    // }
  }

  values = [
    {
      check: true,
      suppliername: 'ABC Suppliers Ltd',
      date: '10-Oct-2024',
      action: '2024/Process/08/445',
      Stage: 'Casting',
      assing: 'John Doe',
      context: 'Assembly',
      escalated: 'Manufacturing',
      due: '12-Oct-2024',
      deley: '2 days',
      details: 'Issue with raw materials procurement',
      status: 'Pending'
    },
    {
      suppliername: 'Global Parts Co.',
      date: '08-Oct-2024',
      action: '2024/Process/08/102',
      Stage: 'Forging',
      assing: 'Jane Smith',
      context: 'CNC Operation',
      escalated: 'Quality',
      due: '11-Oct-2024',
      deley: '3 days',
      details: 'Machine calibration needed',
      status: 'Completed'
    },
    {
      check: true,
      suppliername: 'Tech Innovators',
      date: '05-Oct-2024',
      action: '2024/Process/08/091',
      Stage: 'Machining',
      assing: 'Richard Roe',
      context: 'Testing',
      escalated: 'Quality Assurance',
      due: '10-Oct-2024',
      deley: '5 days',
      details: 'Failure in QA testing process',
      status: 'In Progress'
    },
    {
      check: true,
      suppliername: 'Auto Components Inc.',
      date: '12-Oct-2024',
      action: '2024/Process/08/123',
      Stage: 'Fasteners',
      assing: 'Emily Johnson',
      context: 'Shipping',
      escalated: 'Logistics',
      due: '14-Oct-2024',
      deley: '1 day',
      details: 'Delays in shipment preparation',
      status: 'Delayed'
    },
    {
      suppliername: 'Green Energy Solutions',
      date: '10-Oct-2024',
      action: '2024/Process/08/445',
      Stage: 'Casting',
      assing: 'John Doe',
      context: 'Assembly',
      escalated: 'Manufacturing',
      due: '12-Oct-2024',
      deley: '2 days',
      details: 'Issue with raw materials procurement',
      status: 'Pending'
    },
    {
      suppliername: 'Tech Innovators',
      date: '08-Oct-2024',
      action: '2024/Process/08/102',
      Stage: 'Forging',
      assing: 'Jane Smith',
      context: 'CNC Operation',
      escalated: 'Quality',
      due: '11-Oct-2024',
      deley: '3 days',
      details: 'Machine calibration needed',
      status: 'Completed'
    },
    {
      suppliername: 'Tech Innovators',
      date: '05-Oct-2024',
      action: '2024/Process/08/091',
      Stage: 'Machining',
      assing: 'Richard Roe',
      context: 'Testing',
      escalated: 'Quality Assurance',
      due: '10-Oct-2024',
      deley: '5 days',
      details: 'Failure in QA testing process',
      status: 'In Progress'
    },
    {
      suppliername: 'Tech Innovators',
      date: '12-Oct-2024',
      action: '2024/Process/08/123',
      Stage: 'Fasteners',
      assing: 'Emily Johnson',
      context: 'Shipping',
      escalated: 'Logistics',
      due: '14-Oct-2024',
      deley: '1 day',
      details: 'Delays in shipment preparation',
      status: 'Delayed'
    }
  ];

  opendashboard1() {
    window.open('/#/app/actions');
  }



  addMeeting(item) {
  }
}
