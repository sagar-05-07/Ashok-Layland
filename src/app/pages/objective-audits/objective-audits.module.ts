import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PrtsObjectiveSetupComponent } from './prts-objective-setup/prts-objective-setup.component';
// import { ObjectiveAuditDatatablesComponent } from './objective-audit-datatables/objective-audit-datatables.component';
// import { ObjectiveRadarComponent } from './objective-radar/objective-radar.component';
import { ObjectiveAuditsIssueStatusComponent } from './objective-audits-issue-status/objective-audits-issue-status.component';
import { ObjectiveAuditArchivesComponent } from './objective-audit-archives/objective-audit-archives.component';
import { ObjectiveIthelpDeskComponent } from './objective-ithelp-desk/objective-ithelp-desk.component';
import { ObjectiveUserManualComponent } from './objective-user-manual/objective-user-manual.component';
import { ObjectiveReportsComponent } from './objective-reports/objective-reports.component';
import { ObjectiveAlertsComponent } from './objective-alerts/objective-alerts.component';
import { AddObjectiveAuditComponent } from './objective-audits-issue-status/add-objective-audit/add-objective-audit.component';
import { ObjectiveAuditsComponent } from './objective-audits.component';
import { ObjModuleComponent } from './obj-module/obj-module.component';
import { ObjCaapComponent } from './obj-caap/obj-caap.component';
import { UploadSpecsComponent } from './objective-audits-issue-status/upload-specs/upload-specs.component';
import { DragulaModule } from 'ng2-dragula';
import { GridViewComponent } from './grid-view/grid-view.component';
import { PartsAnalysticsComponent } from './parts-analystics/parts-analystics.component';


const routes: Routes = [
  { path: "", redirectTo: "parts-analystics", pathMatch: "full" },

  {
    path: "prts-objective-setup",
    component: PrtsObjectiveSetupComponent,
    loadChildren: () =>
      import("./prts-objective-setup/prts-objective-setup.module").then((m) => m.PrtsObjectiveSetupModule),
    data: { breadcrumb: 'Setup', description: 'This page is used to Objective Setup' }
  },
  {
    path: "objective-reports",
    component: ObjectiveReportsComponent,
    loadChildren: () =>
      import("./objective-reports/objective-reports.module").then((m) => m.ObjectiveReportsModule),
    data: { breadcrumb: 'Reports', description: 'This page is used to Objective Setup' }
  },
  {
    path: "objective-audits-issues-status",
    component: ObjectiveAuditsIssueStatusComponent,
    data: { breadcrumb: 'Issues Status', description: "This page is used to Issues Status" }
  },
  {
    path: "objective-audit-archives",
    component: ObjectiveAuditArchivesComponent,
    data: { breadcrumb: 'Objective Audit Archives', description: "This page is used to Objective Audit Archives" }
  },

  {
    path: "it-help-desk",
    component: ObjectiveIthelpDeskComponent,
    data: { breadcrumb: 'It Help Desk', description: "This page is used to Objective Audit Archives" }
  },
  {
    path: "user-manual",
    component: ObjectiveUserManualComponent,
    data: { breadcrumb: 'Objective User Manual', description: "This page is used to Objective Audit Archives" }
  },
  {
    path: "reports",
    component: ObjectiveReportsComponent,
    data: { breadcrumb: 'Objective Reports', description: "This page is used to Objective Audit Archives" }
  },
  {
    path: "alerts",
    component: ObjectiveAlertsComponent,
    data: { breadcrumb: 'Objective Alerts', description: "This page is used to Objective Audit Archives" }
  },
  { path: "obj-module", component: ObjModuleComponent },
  {
    path: "obj-capa", component: ObjCaapComponent,
    data: { breadcrumb: 'CAPA', description: "This page is used to CAPA" }
  },

  {
    path: "parts-analystics",
    component: PartsAnalysticsComponent,
    loadChildren: () =>
      import("./parts-analystics/parts-analystics.module").then((m) => m.PartsAnalysticsModule),
    data: { breadcrumb: 'Parts Analystics', description: 'This page is used to Objective Setup' }
  },
];

@NgModule({
  declarations: [
    ObjectiveAuditsComponent,
    ObjectiveAuditsIssueStatusComponent,
    AddObjectiveAuditComponent,
    ObjectiveAuditArchivesComponent,
    // ObjectiveRadarComponent,
    // ObjectiveAuditDatatablesComponent,
    ObjectiveReportsComponent,
    ObjectiveUserManualComponent,
    ObjectiveIthelpDeskComponent,
    ObjectiveAlertsComponent,
    ObjModuleComponent,
    ObjCaapComponent,
    UploadSpecsComponent,
    GridViewComponent


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    DragulaModule.forRoot(),
  ]

})
export class ObjectiveAuditsModule { }
