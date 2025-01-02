import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectiveAuditArchivesComponent } from './subjective-audit-archives/subjective-audit-archives.component';
import { SubjectiveAuditsIssueStatusComponent } from './subjective-audits-issue-status/subjective-audits-issue-status.component';
import { PrtsSubjectiveSetupComponent } from './prts-subjective-setup/prts-subjective-setup.component';
import { SubjectiveAuditDatatablesComponent } from './subjective-audit-datatables/subjective-audit-datatables.component';
import { SubjectiveDashboardComponent } from './subjective-dashboard/subjective-dashboard.component';
import { SubjectiveAlertsComponent } from './subjective-alerts/subjective-alerts.component';
import { SubjectiveIthelpDeskComponent } from './subjective-ithelp-desk/subjective-ithelp-desk.component';
import { SubjectiveReportsComponent } from './subjective-reports/subjective-reports.component';
import { SubjectiveUserManualComponent } from './subjective-user-manual/subjective-user-manual.component';
import { SubjectiveAuditsComponent } from './subjective-audits.component';
import { AddSubjectiveAuditComponent } from './subjective-audits-issue-status/add-subjective-audit/add-subjective-audit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CapaComponent } from './capa/capa.component';
import { AddCapaComponent } from './capa/add-capa/add-capa.component';
import { AddDocsComponent } from './capa/add-docs/add-docs.component';
import { NotesPopComponent } from './capa/notes-pop/notes-pop.component';
import { CapaScreenComponent } from './subjective-audits-issue-status/capa-screen/capa-screen.component';
import { NotesComponent } from './capa/notes/notes.component';
import { ProcessAnalyticsComponent } from './process-analytics/process-analytics.component';

const routes: Routes = [
  { path: "", redirectTo: "process-analytics", pathMatch: "full" },

  {
    path: "subjective-audits-issues-status",
    component: SubjectiveAuditsIssueStatusComponent,
    loadChildren: () =>
      import("./subjective-audits-issue-status/subjective-audits-issue-status.module").then((m) => m.SubjectiveAuditsIssueStatusModule),
    data: { breadcrumb: 'Setup', description: 'This page is used to Objective Setup' }
  },

  { path: 'subjective-audit-archives', component: SubjectiveAuditArchivesComponent, data: { breadcrumb: 'Archives', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

  {
    path: "prts-subjective-setup",
    component: PrtsSubjectiveSetupComponent,
    loadChildren: () =>
      import("./prts-subjective-setup/prts-subjective-setup.module").then((m) => m.PrtsSubjectiveSetupModule),
    data: { breadcrumb: 'Setup', description: 'This page is used to Objective Setup' }
  },

  {
    path: "process-analytics",
    component: ProcessAnalyticsComponent,
    loadChildren: () =>
      import("./process-analytics/process-analytics.module").then((m) => m.ProcessAnalyticsModule),
    data: { breadcrumb: 'Process Analytics', description: 'This page is used to Objective Setup' }
  },


  {
    path: "subjective-audit-datatables",
    component: SubjectiveAuditDatatablesComponent,
    loadChildren: () =>
      import("./subjective-audit-datatables/subjective-audit-datatables.module").then((m) => m.SubjectiveAuditDatatablesModule),
    data: { breadcrumb: 'Data Tables', description: 'This page is used to Objective Setup' }
  },
  {
    path: "subjective-dashboard",
    component: SubjectiveDashboardComponent,
    loadChildren: () =>
      import("./subjective-dashboard/subjective-dashboard.module").then((m) => m.SubjectiveDashboardModule),
    data: { breadcrumb: 'Radar', description: 'This page is used to Objective Setup' }
  },
  {
    path: "subjective-reports",
    component: SubjectiveReportsComponent,
    loadChildren: () =>
      import("./subjective-reports/subjective-reports.module").then((m) => m.SubjectiveReportsModule),
    data: { breadcrumb: 'Reports', description: 'This page is used to Objective Setup' }
  },
  { path: 'subjective-alerts', component: SubjectiveAlertsComponent, data: { breadcrumb: 'Subjective Alterts', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

  { path: 'it-help', component: SubjectiveIthelpDeskComponent, data: { breadcrumb: 'It Help Desk', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

  { path: 'reports', component: SubjectiveReportsComponent, data: { breadcrumb: 'Reports', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

  { path: 'user-manual', component: SubjectiveUserManualComponent, data: { breadcrumb: 'User Manual', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

  { path: 'capa', component: CapaComponent, data: { breadcrumb: 'CAPA', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

  { path: 'capa-screen', component: CapaScreenComponent, data: { breadcrumb: 'Actions', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

];

@NgModule({
  declarations: [
    SubjectiveAuditsComponent,
    SubjectiveAuditsIssueStatusComponent,
    AddSubjectiveAuditComponent,
    SubjectiveAuditArchivesComponent,
    SubjectiveAuditDatatablesComponent,
    SubjectiveDashboardComponent,
    SubjectiveAlertsComponent,
    SubjectiveIthelpDeskComponent,
    SubjectiveUserManualComponent,
    SubjectiveReportsComponent,
    SubjectiveDashboardComponent,
    CapaComponent,
    AddCapaComponent,
    AddDocsComponent,
    NotesPopComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
  ]
})
export class SubjectiveAuditsModule { }
