import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemeritComponent } from './demerit.component';
import { IssueLogComponent } from './issue-log/issue-log.component';
import { MetricsComponent } from './metrics/metrics.component';
import { NotesComponent } from './notes/notes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "issuelog", pathMatch: "full" },

  { path: 'issuelog', component: IssueLogComponent },
  { path: 'notes', component: NotesComponent },

  // {
  //   path: "metricckeck",
  //   component: MetricCheckComponent,
  //   loadChildren: () =>
  //     import("./metric-check/metric-check.module").then((m) => m.MetricCheckModule),
  //   data: { breadcrumb: 'Metrics', description: 'This page is used to  metrics' }
  // },


];

@NgModule({
  declarations: [
    DemeritComponent,
    IssueLogComponent,
    MetricsComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DemeritModule { }
