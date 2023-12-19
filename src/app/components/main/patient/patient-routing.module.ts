import {inject, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./patient.component";
import {PatientDetailComponent} from "./patient-details/patient-detail/patient-detail.component";
import {EhrComponent} from "./patient-details/ehr/ehr.component";
import {Patient} from "../../../models/patient";

const routes: Routes = [
  {
    path: ':patientCode',
    component: PatientComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./patient-details/patient-details.module').then(m => m.PatientDetailsModule)
      },
      {
        path: 'rehab',
        loadChildren: () => import('./rehab-program/rehab-program.module').then(m => m.RehabProgramModule)
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
