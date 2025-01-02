import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierProcessComponent } from './supplier-process.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProcessActiveComponent } from './process-active/process-active.component';
import { ProcessOverdueComponent } from './process-overdue/process-overdue.component';
import { AdddCasesComponent } from './process-active/addd-cases/addd-cases.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


const routes: Routes = [
  { path: "", redirectTo: "active", pathMatch: "full" },


  { path: 'supplier-process', component: SupplierProcessComponent, },

  { path: 'active', component: ProcessActiveComponent, },
  { path: 'overdue', component: ProcessOverdueComponent, },

  // { path: 'overdue', component: OverdueComponent, data: { breadcrumb: 'OverDue', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

  // { path: 'resolved', component: ResolvedComponent, data: { breadcrumb: 'Resolved', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

]

@NgModule({
  declarations: [
    SupplierProcessComponent,
    ProcessActiveComponent,
    ProcessOverdueComponent,
    AdddCasesComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,

    })
  ]
})
export class SupplierProcessModule { }
