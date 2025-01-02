import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsAnalysticsComponent } from './parts-analystics.component';
import { PartsFamilyDashComponent } from './parts-family-dash/parts-family-dash.component';
import { PartsPerformanceComponent } from './parts-performance/parts-performance.component';
import { PartsActionsComponent } from './parts-actions/parts-actions.component';
import { PartsSactterComponent } from './parts-sactter/parts-sactter.component';
import { PartsParetoComponent } from './parts-pareto/parts-pareto.component';
import { BellCurveComponent } from './bell-curve/bell-curve.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "parts-family", pathMatch: "full" },


  { path: 'parts-family', component: PartsFamilyDashComponent, data: { breadcrumb: 'Commodity', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'performance', component: PartsPerformanceComponent, data: { breadcrumb: 'Performance', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'actions', component: PartsActionsComponent, data: { breadcrumb: 'Actions', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'scatter', component: PartsSactterComponent, data: { breadcrumb: 'Scatter', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'bell-curve', component: BellCurveComponent, data: { breadcrumb: 'Bell-Curve', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'pareto', component: PartsParetoComponent, data: { breadcrumb: 'Pareto', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },


];

@NgModule({
  declarations: [
    PartsAnalysticsComponent,
    PartsFamilyDashComponent,
    PartsPerformanceComponent,
    PartsActionsComponent,
    PartsSactterComponent,
    PartsParetoComponent,
    BellCurveComponent
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
export class PartsAnalysticsModule { }
