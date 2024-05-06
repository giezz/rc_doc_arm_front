import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./patient.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";
import {EmcComponent} from "./emc/emc.component";
import {RehabProgramsComponent} from "./rehab-programs/rehab-programs.component";

const routes: Routes = [
    {
        path: '',
        component: PatientComponent,
        children: [
            {
                path: '',
                component: PatientDetailComponent
            },
            {
                path: 'emc',
                component: EmcComponent
            },
            {
                path: 'rehab-programs',
                component: RehabProgramsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientRoutingModule {
}
