import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessComponent } from './process.component';
import { OverdueComponent } from './overdue/overdue.component';
import { ResolvedComponent } from './resolved/resolved.component';
import { ActiveComponent } from './active/active.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "active", pathMatch: "full" },


  { path: 'active', component: ActiveComponent, data: { breadcrumb: 'Active', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

  { path: 'overdue', component: OverdueComponent, data: { breadcrumb: 'OverDue', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

  { path: 'resolved', component: ResolvedComponent, data: { breadcrumb: 'Resolved', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

]

@NgModule({
  declarations: [
    ProcessComponent,
    ActiveComponent,
    OverdueComponent,
    ResolvedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProcessModule { }
