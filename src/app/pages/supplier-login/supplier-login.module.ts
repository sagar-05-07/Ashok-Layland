import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "process-audit", pathMatch: "full" },

  { path: 'process-audit', loadChildren: () => import('./process/process.module').then(m => m.ProcessModule) },
  { path: 'parts-audit', loadChildren: () => import('./parts/parts.module').then(m => m.PartsModule) },
  // { path: 'process-audit', component: ProcessComponent, data: { breadcrumb: 'Active', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },

  // { path: 'parts-audit', component: PartsComponent, data: { breadcrumb: 'OverDue', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },


]

@NgModule({
  declarations: [
    // SupplierLoginComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SupplierLoginModule { }
