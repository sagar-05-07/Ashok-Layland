import { LogissueInnerFormComponent } from './pages/logissue-inner-form/logissue-inner-form.component';
//import { LogissueInnerFormComponent } from './pages/parameter-dashboard/par-auditlog/logissue-inner-form/logissue-inner-form.component';
//import { LogissueInnerForm2Component } from './pages/logissue-inner-form2/logissue-inner-form2.component';
import { PrtsAddgridModule } from './pages/prts-addgrid/prts-addgrid.module';
import { PrtsAddgridComponent } from './pages/prts-addgrid/prts-addgrid.component';
import { ParameterDashboardComponent } from './pages/parameter-dashboard/parameter-dashboard.component';
import { ChecklistDashboardComponent } from './pages/checklist-dashboard/checklist-dashboard.component';
import { NewDashboardComponent } from './pages/new-dashboard/new-dashboard.component';
import { NewDashboardModule } from './pages/new-dashboard/new-dashboard.module';
//import { RadarComponent } from './pages/analytics/radar/radar.component';
import { SetupComponent } from './pages/setup/setup.component';
//import { NewAuditsComponent } from './pages/new-audits/new-audits.component';
//import { AuditsModule } from './pages/audits/audits.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ErrorComponent } from './pages/error/error.component';
//import { AuditsComponent } from './pages/audits/audits.component';
import { RadarModule } from './pages/radar/radar.module';
import { RadarComponent } from './pages/radar/radar.component';
import { SubjectiveAuditsComponent } from './pages/subjective-audits/subjective-audits.component';
import { ObjectiveAuditsComponent } from './pages/objective-audits/objective-audits.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PrtsOnePagerComponent } from './pages/prts-one-pager/prts-one-pager.component';
import { GridPrtsComponent } from './pages/prts/grid-prts/grid-prts.component';
import { PrtsComponent } from './pages/prts/prts.component';
import { PrtsPart1Component } from './pages/prts-part/prts-part.component';
import { SupplierPartsComponent } from './pages/supplier-parts/supplier-parts.component';
import { CapaActionsComponent } from './pages/capa-actions/capa-actions.component';
import { ProcessDashboardComponent } from './pages/process-dashboard/process-dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    {
        path: 'app',
        component: PagesComponent, children: [




            { path: 'supplier-login', loadChildren: () => import('./pages/supplier-login/supplier-login.module').then(m => m.SupplierLoginModule) },

            { path: 'supplier-process', loadChildren: () => import('./pages/supplier-process/supplier-process.module').then(m => m.SupplierProcessModule) },
            // { path: 'supplier-parts', loadChildren: () => import('./pages/supplier-process/supplier-process.module').then(m => m.SupplierProcessModule) },

            { path: 'supplier-parts', component: SupplierPartsComponent, },

            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'inner-form', component: LogissueInnerFormComponent,
                data: { breadcrumb: 'Issuelog', description: 'This page is used to display the Issue Log' }
            },
            {
                path: 'client-login', loadChildren: () =>
                    import("./pages/client-login/client-login.module").then((m) => m.ClientLoginModule),
                data: { breadcrumb: 'Client Login' }
            },


            {
                path: 'admin', loadChildren: () =>
                    import("./pages/admin/admin.module").then((m) => m.AdminModule),
                data: { breadcrumb: 'Admin' }
            },

            {
                path: 'dashboard', component: DashboardComponent,
                loadChildren: () =>
                    import("./pages/dashboard/dashboard.module").then((m) => m.DashboardModule),
                data: { breadcrumb: 'Dashboard' }
            },

            {
                path: 'checklistdoard', component: ChecklistDashboardComponent, loadChildren: () =>
                    import('./pages/checklist-dashboard/checklist-dashboard.module').then((m) => m.ChecklistDashboardModule),
                data: { breadcrumb: 'Subjective Audit', description: 'Audits throught the application are managed here.' }
            },

            {
                path: 'actions', component: CapaActionsComponent,
                data: { breadcrumb: 'Add Update Action', description: 'This page is used to display the Issue Log' }
            },

            {
                path: 'prtsonepager', component: PrtsOnePagerComponent, loadChildren: () =>
                    import("./pages/prts-one-pager/prts-one-pager.module").then((m) => m.PrtsOnePagerModule),

                data: { breadcrumb: 'PRTS' }
            },
            // {
            //     path: 'new-audits', component: NewAuditsComponent, loadChildren: () =>
            //         import('./pages/new-audits/new-audits.module').then((m) => m.NewAuditsModule),
            //     data: { breadcrumb: 'Audit' }
            // },
            {
                path: 'subjective-audits', component: SubjectiveAuditsComponent, loadChildren: () =>
                    import('./pages/subjective-audits/subjective-audits.module').then((m) => m.SubjectiveAuditsModule),
                data: { breadcrumb: 'Audit' }
            },
            {
                path: 'objective-audits', component: ObjectiveAuditsComponent, loadChildren: () =>
                    import('./pages/objective-audits/objective-audits.module').then((m) => m.ObjectiveAuditsModule),
                data: { breadcrumb: 'Audit' }
            },

            {
                path: 'setup', component: SetupComponent, loadChildren: () =>
                    import("./pages/setup/setup.module").then((m) => m.SetupModule),
                data: { breadcrumb: 'Setup' }
            },

            {
                path: 'radar1', component: RadarComponent, loadChildren: () =>
                    import("./pages/radar/radar.module").then((m) => m.RadarModule),

                data: { breadcrumb: 'Home' }
            },

            {
                path: 'prts', component: GridPrtsComponent, loadChildren: () =>
                    import("./pages/prts/prts.module").then((m) => m.PrtsModule),

                data: { breadcrumb: 'PRTS' }
            },
            {

                path: 'prts-grid', component: PrtsAddgridComponent, loadChildren: () =>
                    import("./pages/prts-addgrid/prts-addgrid.module").then((m) => m.PrtsAddgridModule),


            },
            {
                path: 'prtsnavbar', component: PrtsComponent, loadChildren: () =>
                    import("./pages/prts/prts.module").then((m) => m.PrtsModule),

                data: { breadcrumb: 'PRTS' }
            },
            {
                path: 'prts-part', component: PrtsPart1Component, loadChildren: () =>
                    import("./pages/prts-part/prts-part.module").then((m) => m.PrtsPartModule),

                data: { breadcrumb: 'PRTS' }
            },

            {
                path: 'parameterboard', component: ParameterDashboardComponent, loadChildren: () =>
                    import("./pages/parameter-dashboard/parameter-dashboard.module").then((m) => m.ParameterDashboardModule),
                data: { breadcrumb: 'Objective Audit', description: 'Audits throught the application are managed here.' }
            },


            {
                path: 'process-dashboard', component: ProcessDashboardComponent,
                data: { breadcrumb: 'Objective Audit', description: 'Audits throught the application are managed here.' }
            },
        ]
    },

    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    {
        path: 'error', component: ErrorComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
            relativeLinkResolution: 'legacy',
        })
    ],
    exports: [
        RouterModule,

    ]
})
export class AppRoutingModule { }

