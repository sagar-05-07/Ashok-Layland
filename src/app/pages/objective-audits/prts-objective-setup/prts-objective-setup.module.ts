import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjSetupAuditTypeComponent } from './obj-setup-audit-type/obj-setup-audit-type.component';
import { ObjSetupCategoryMasterComponent } from './obj-setup-category-master/obj-setup-category-master.component';
import { ObjSetupMeasureMasterComponent } from './obj-setup-measure-master/obj-setup-measure-master.component';
import { ObjSetupModulesCheckpointsComponent } from './obj-setup-modules-checkpoints/obj-setup-modules-checkpoints.component';
import { ObjSetupMontlyTargetsComponent } from './obj-setup-montly-targets/obj-setup-montly-targets.component';
import { PrtsObjectiveSetupComponent } from './prts-objective-setup.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddObjSetupAuditTypeComponent } from './obj-setup-audit-type/add-obj-setup-audit-type/add-obj-setup-audit-type.component';
import { AddObjSetupCategoryMasterComponent } from './obj-setup-category-master/add-obj-setup-category-master/add-obj-setup-category-master.component';
import { AddObjSetupMeasureMasterComponent } from './obj-setup-measure-master/add-obj-setup-measure-master/add-obj-setup-measure-master.component';
import { AddObjSetupModulesCheckpointsComponent } from './obj-setup-modules-checkpoints/add-obj-setup-modules-checkpoints/add-obj-setup-modules-checkpoints.component';
import { AddObjSetupMonthlyTargetsComponent } from './obj-setup-montly-targets/add-obj-setup-monthly-targets/add-obj-setup-monthly-targets.component';
import { ObjImageDialogComponent } from './obj-setup-modules-checkpoints/obj-image-dialog/obj-image-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { FamilyPartsComponent } from './family-parts/family-parts.component';
import { PartsMasterComponent } from './parts-master/parts-master.component';
import { AddPartsFamilyComponent } from './family-parts/add-parts-family/add-parts-family.component';
import { AddPartsComponent } from './parts-master/add-parts/add-parts.component';
import { SuppilerPopComponent } from './parts-master/suppiler-pop/suppiler-pop.component';


const routes: Routes = [
  { path: '', redirectTo: 'obj-setup-category-master', pathMatch: 'full' },
  { path: 'obj-setup-audit-type', component: ObjSetupAuditTypeComponent, data: { breadcrumb: 'Audit Type', description: 'Modules for objective audits can be setup and defined here.' } },
  {
    path: 'obj-setup-category-master', component: ObjSetupCategoryMasterComponent, data: {
      breadcrumb: 'Category Master', description: 'Functions for each module for objective audits can be setup and defined here.'
    }
  },
  {
    path: 'obj-setup-measure-master', component: ObjSetupMeasureMasterComponent, data: {
      breadcrumb: 'Measure Master', description: 'The default list of issues for each defect can be managed here.  User can use default text or over ride it as required while recording the audit.'
    }
  },
  {
    path: 'obj-setup-modules-checkpoints', component: ObjSetupModulesCheckpointsComponent, data: {
      breadcrumb: 'Modules And Checkpoints', description: 'Functions for each module for objective audits can be setup and defined here.'
    }
  },
  // {
  //   path: 'add-obj-setup-modules-checkpoints', component: AddObjSetupModulesCheckpointsComponent, data: {
  //     breadcrumb: 'Measure Master', description: 'The default list of issues for each defect can be managed here.  User can use default text or over ride it as required while recording the audit.'
  //   }
  // },


  { path: 'parts', component: PartsMasterComponent, data: { breadcrumb: 'Parts Master', description: 'Score targets can be setup here based on audit type and model mix settings for monthly periods.' } },

  { path: 'parts-family', component: FamilyPartsComponent, data: { breadcrumb: 'Parts Family', description: 'Score targets can be setup here based on audit type and model mix settings for monthly periods.' } },


  { path: 'obj-setup-monthly-targets', component: ObjSetupMontlyTargetsComponent, data: { breadcrumb: 'Monthly Targets', description: 'Score targets can be setup here based on audit type and model mix settings for monthly periods.' } }
];

@NgModule({
  declarations: [
    ObjSetupAuditTypeComponent,
    ObjSetupCategoryMasterComponent,
    ObjSetupMeasureMasterComponent,
    ObjSetupModulesCheckpointsComponent,
    ObjSetupMontlyTargetsComponent,
    PrtsObjectiveSetupComponent,
    AddObjSetupAuditTypeComponent,
    AddObjSetupCategoryMasterComponent,
    AddObjSetupMeasureMasterComponent,
    AddObjSetupModulesCheckpointsComponent,
    AddObjSetupMonthlyTargetsComponent,
    ObjImageDialogComponent,
    FamilyPartsComponent,
    PartsMasterComponent,
    AddPartsFamilyComponent,
    AddPartsComponent,
    SuppilerPopComponent
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
export class PrtsObjectiveSetupModule { }
