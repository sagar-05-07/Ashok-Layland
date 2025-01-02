import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterdataNewComponent } from './masterdata-new.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VariantComponent } from './variant/variant.component';
import { AddVariantComponent } from './variant/add-variant/add-variant.component';
import { ColorComponent } from './color/color.component';
import { FuelTypeComponent } from './fuel-type/fuel-type.component';
import { InteriorTrimComponent } from './interior-trim/interior-trim.component';
import { ModelComponent } from './model/model.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { AddColorComponent } from './color/add-color/add-color.component';
import { AddFuelTypeComponent } from './fuel-type/add-fuel-type/add-fuel-type.component';
import { AddInteriorTrimComponent } from './interior-trim/add-interior-trim/add-interior-trim.component';
import { AddTransmissionComponent } from './transmission/add-transmission/add-transmission.component';
import { AddEditModalComponent } from './add-edit-modal/add-edit-modal.component';
import { AddModelComponent } from './model/add-model/add-model.component';
import { LocationComponent } from './location/location.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { AgencyMasterComponent } from './agency-master/agency-master.component';
import { DRolesComponent } from './d-roles/d-roles.component';
import { AddAgencyComponent } from './agency-master/add-agency/add-agency.component';
import { AddRolesComponent } from './d-roles/add-roles/add-roles.component';
import { AddDescriptionComponent } from './d-roles/add-description/add-description.component';
import { AddpillarComponent } from './d-roles/addpillar/addpillar.component';
import { AddDocumentComponent } from './d-roles/add-document/add-document.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { StagesComponent } from './stages/stages.component';
import { AddStagesComponent } from './stages/add-stages/add-stages.component';
import { SupplierMasterComponent } from './supplier-master/supplier-master.component';
import { AddSupplierComponent } from './supplier-master/add-supplier/add-supplier.component';
import { LocationPopComponent } from './supplier-master/location-pop/location-pop.component';
import { StateMasterComponent } from './state-master/state-master.component';
import { CityMasterComponent } from './city-master/city-master.component';
import { AddCityComponent } from './city-master/add-city/add-city.component';
import { AddStateComponent } from './state-master/add-state/add-state.component';

const routes: Routes = [
  { path: "", redirectTo: "supplier", pathMatch: "full" },
  { path: 'model', component: ModelComponent, data: { breadcrumb: 'Model Master', description: 'List of models are managed here.' } },
  { path: 'location', component: LocationComponent, data: { breadcrumb: 'Location', description: 'List of locations are managed here.' } },
  { path: 'variant', component: VariantComponent, data: { breadcrumb: 'Variant Master', description: 'List of variants for each of the models are managed here.' } },
  { path: 'agency', component: AgencyMasterComponent, data: { breadcrumb: 'Agency Master', description: 'List of agencies are managed here.' } },
  { path: 'interior-trim', component: InteriorTrimComponent, data: { breadcrumb: 'Interior Trim', description: 'List of interior trims are managed here.' } },
  { path: 'colour', component: ColorComponent, data: { breadcrumb: 'Color', description: 'List of body colors are managed here.' } },
  { path: 'droles', component: DRolesComponent, data: { breadcrumb: '7D Roles', description: 'List of 7D steps is managed here and the users authorized to submit and approve each step is updated in this interface.' } },
  { path: 'transmission', component: TransmissionComponent, data: { breadcrumb: 'Transmission', description: 'List of transmission types is managed here.' } },
  { path: 'fuel-type', component: FuelTypeComponent, data: { breadcrumb: 'Fuel Type', description: 'List of fuel types are managed here' } },
  { path: 'stages', component: StagesComponent, data: { breadcrumb: 'Stages', description: 'List of stages are managed here' } },

  { path: 'supplier', component: SupplierMasterComponent, data: { breadcrumb: 'Supplier Master', description: "This screen covers comprehensive list of data across the application. New data can be added, deleted or modified according to functionality." } },

  { path: 'city', component: CityMasterComponent, data: { breadcrumb: 'City Master', description: "This screen covers comprehensive list of data across the application. New data can be added, deleted or modified according to functionality." } },
  { path: 'state', component: StateMasterComponent, data: { breadcrumb: 'State Master', description: "This screen covers comprehensive list of data across the application. New data can be added, deleted or modified according to functionality." } }


];

@NgModule({
  declarations: [
    MasterdataNewComponent,
    AddModelComponent,
    VariantComponent,
    AddVariantComponent,
    ColorComponent,
    FuelTypeComponent,
    InteriorTrimComponent,
    ModelComponent,
    TransmissionComponent,
    AddColorComponent,
    AddFuelTypeComponent,
    AddInteriorTrimComponent,
    AddTransmissionComponent,
    AddEditModalComponent,
    LocationComponent,
    AddLocationComponent,
    AgencyMasterComponent,
    AddAgencyComponent,
    AddRolesComponent,
    DRolesComponent,
    AddDescriptionComponent,
    AddpillarComponent,
    AddDocumentComponent,
    StagesComponent,
    AddStagesComponent,
    SupplierMasterComponent,
    AddSupplierComponent,
    LocationPopComponent,
    StateMasterComponent,
    CityMasterComponent,
    AddCityComponent,
    AddStateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class MasterdataNewModule { }
