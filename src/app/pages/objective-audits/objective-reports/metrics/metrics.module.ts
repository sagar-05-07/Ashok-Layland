import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsComponent } from './metrics.component';
import { AgencyComponent } from './agency/agency.component';
import { AuditTypeComponent } from './audit-type/audit-type.component';
import { FuelTypeComponent } from './fuel-type/fuel-type.component';
import { ModelComponent } from './model/model.component';
import { ModuleComponent } from './module/module.component';
import { SecurityComponent } from './security/security.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { VariantComponent } from './variant/variant.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';

const routes: Routes = [
  { path: "", redirectTo: "audit-type", pathMatch: "full" },

  { path: "audit-type", component: AuditTypeComponent },
  { path: "severity", component: SecurityComponent },
  { path: "agency", component: AgencyComponent },
  { path: "model", component: ModelComponent },
  { path: "fuel-type", component: FuelTypeComponent },
  { path: "transmission", component: TransmissionComponent },
  { path: "variant", component: VariantComponent },
  { path: "module", component: ModuleComponent },
]

@NgModule({
  declarations: [
    MetricsComponent,
    AgencyComponent,
    AuditTypeComponent,
    FuelTypeComponent,
    ModelComponent,
    ModuleComponent,
    SecurityComponent,
    TransmissionComponent,
    VariantComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HighchartsChartModule
  ]
})
export class MetricsModule { }
