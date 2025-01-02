import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-dashboard',
  templateUrl: './process-dashboard.component.html',
  styleUrls: ['./process-dashboard.component.scss']
})
export class ProcessDashboardComponent implements OnInit {


  auditDate: string = '2024-05-12';

  constructor() { }

  ngOnInit(): void {
  }

}
