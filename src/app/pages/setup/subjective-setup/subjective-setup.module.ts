import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectiveSetupComponent } from './subjective-setup.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryMasterComponent } from './category-master/category-master.component';
import { CheckpointMasterComponent } from './checkpoint-master/checkpoint-master.component';
import { MeasurementMasterComponent } from './measurement-master/measurement-master.component';
import { MonthlyTargetsComponent } from './monthly-targets/monthly-targets.component';
import { ParAuditTypeComponent } from './par-audit-type/par-audit-type.component';
import { AddCategoryComponent } from './category-master/add-category/add-category.component';
import { AddCheckpointComponent } from './checkpoint-master/add-checkpoint/add-checkpoint.component';
import { AddMesurmentComponent } from './measurement-master/add-mesurment/add-mesurment.component';
import { AddMonthlyComponent } from './monthly-targets/add-monthly/add-monthly.component';
import { AddParAuditComponent } from './par-audit-type/add-par-audit/add-par-audit.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { AddImageComponent } from './photo-gallery/add-image/add-image.component';
import { OverviewCheckComponent } from './checkpoint-master/overview-check/overview-check.component';
import { CheckpointCheckComponent } from './checkpoint-master/checkpoint-check/checkpoint-check.component';
import { ImageDialogComponent } from './checkpoint-master/image-dialog/image-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { ImgClickPopComponent } from './checkpoint-master/checkpoint-check/img-click-pop/img-click-pop.component';

export const routes = [
  { path: '', redirectTo: 'checkpoint-master', pathMatch: 'full' },
  { path: 'category-master', component: CategoryMasterComponent, data: { breadcrumb: 'Category Master', description: 'Categories for objective audits can be setup and defined here.' } },
  { path: 'checkpoint-master', component: CheckpointMasterComponent, data: { breadcrumb: 'Checkpoint Master', description: 'Features for each category for Subjective audits can be setup and defined here.' } },
  {
    path: 'measurement-master', component: MeasurementMasterComponent, data: {
      breadcrumb: 'Measurment Master', description: 'The actual parameters that are measured for each checkpoint along with USL and LSL values are setup here.'
    }
  },
  { path: 'photo-gallery', component: PhotoGalleryComponent, data: { breadcrumb: 'Photo Gallery', description: 'The list of photos for objective audits can be managed here.' } },
  { path: 'par-audit-type', component: ParAuditTypeComponent, data: { breadcrumb: 'Audit type', description: 'The list of audit types for objective audits can be managed here.' } },
  { path: 'par-monthly-target', component: MonthlyTargetsComponent, data: { breadcrumb: 'Monthly Targets', description: 'Score targets can be setup here based on audit type and model mix settings for monthly periods.' } },
  { path: 'overview', component: OverviewCheckComponent, data: { breadcrumb: 'Overview', description: 'The list of audit types for objective audits can be managed here.' } },
  { path: 'check', component: CheckpointCheckComponent, data: { breadcrumb: 'Checkpoints', description: 'Score targets can be setup here based on audit type and model mix settings for monthly periods.' } },

];

@NgModule({
  declarations: [
    SubjectiveSetupComponent,
    CategoryMasterComponent,
    CheckpointMasterComponent,
    MeasurementMasterComponent,
    MonthlyTargetsComponent,
    ParAuditTypeComponent,
    AddCategoryComponent,
    AddCheckpointComponent,
    AddMesurmentComponent,
    AddMonthlyComponent,
    AddParAuditComponent,
    PhotoGalleryComponent,
    AddImageComponent,
    OverviewCheckComponent,
    CheckpointCheckComponent,
    ImageDialogComponent,
    ImgClickPopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,

  ]
})
export class SubjectiveSetupModule { }
