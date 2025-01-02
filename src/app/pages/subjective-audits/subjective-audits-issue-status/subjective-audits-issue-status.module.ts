import { DemeritComponent } from './demerit/demerit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProcessGridviewComponent } from './add-subjective-audit/process-gridview/process-gridview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CapaScreenComponent } from './capa-screen/capa-screen.component';

const routes: Routes = [
  { path: "", redirectTo: "subjective-reports", pathMatch: "full" },

  {
    path: "demerit",
    component: DemeritComponent,
    loadChildren: () =>
      import("./demerit/demerit.module").then((m) => m.DemeritModule),
    data: { breadcrumb: 'Setup', description: 'This page is used to Objective Setup' }
  },

];

@NgModule({
  declarations: [
    ProcessGridviewComponent,
    CapaScreenComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    SharedModule
  ]
})
export class SubjectiveAuditsIssueStatusModule { }
