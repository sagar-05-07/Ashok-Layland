import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard.component';
import { PopPieChartComponent } from './pop-pie-chart/pop-pie-chart.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProcessDashboardComponent } from './process-dashboard/process-dashboard.component';
import { PartsDashboardComponent } from './parts-dashboard/parts-dashboard.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewPartsDashComponent } from './new-parts-dash/new-parts-dash.component';
import { NewProcessDashComponent } from './new-process-dash/new-process-dash.component';


const routes: Routes = [
  { path: "", redirectTo: "new-process-audit", pathMatch: "full" },

  { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard', description: 'Dashboard  The trend, distribution, summary statistics and alerts appear here.' } },

  { path: 'process-audit', component: ProcessDashboardComponent, data: { breadcrumb: 'Process Audit Dashboard', description: 'Dashboard The trend, distribution, summary statistics and alerts appear here.' } },

  { path: 'parts-audit', component: PartsDashboardComponent, data: { breadcrumb: 'Parts Audit Dashboard', description: 'Dashboard The trend, distribution, summary statistics and alerts appear here.' } },

  { path: 'new-parts-audit', component: NewPartsDashComponent, data: { breadcrumb: 'Parts Audit Dashboard', description: 'Dashboard The trend, distribution, summary statistics and alerts appear here.' } },

  { path: 'new-process-audit', component: NewProcessDashComponent, data: { breadcrumb: 'Process Audit Dashboard', description: 'Dashboard The trend, distribution, summary statistics and alerts appear here.' } },

]

@NgModule({
  declarations: [
    DashboardComponent,
    PopPieChartComponent,
    ProcessDashboardComponent,
    PartsDashboardComponent,
    NewPartsDashComponent,
    NewProcessDashComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    NgxChartsModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    HighchartsChartModule,
    MatToolbarModule,
    CanvasJSAngularChartsModule,
    SharedModule

  ],

})
export class DashboardModule { }
