import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessAnalyticsComponent } from './process-analytics.component';
import { CommodityComponent } from './commodity/commodity.component';
import { PerformanceComponent } from './performance/performance.component';
import { ActionsComponent } from './actions/actions.component';
import { ScatterComponent } from './scatter/scatter.component';
import { BellCurveComponent } from './bell-curve/bell-curve.component';
import { ParetoComponent } from './pareto/pareto.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

const routes: Routes = [
  { path: "", redirectTo: "commodity", pathMatch: "full" },


  { path: 'commodity', component: CommodityComponent, data: { breadcrumb: 'Commodity', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'performance', component: PerformanceComponent, data: { breadcrumb: 'Performance', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'actions', component: ActionsComponent, data: { breadcrumb: 'Actions', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'scatter', component: ScatterComponent, data: { breadcrumb: 'Scatter', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'bell-curve', component: BellCurveComponent, data: { breadcrumb: 'Bell-Curve', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'pareto', component: ParetoComponent, data: { breadcrumb: 'Pareto', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },


];

@NgModule({
  declarations: [
    ProcessAnalyticsComponent,
    CommodityComponent,
    PerformanceComponent,
    ActionsComponent,
    ScatterComponent,
    BellCurveComponent,
    ParetoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    HighchartsChartModule,
    MatToolbarModule,
    CanvasJSAngularChartsModule,
    SharedModule
  ]
})
export class ProcessAnalyticsModule { }
