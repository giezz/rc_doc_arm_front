import {inject, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./patient.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";
import {EhrComponent} from "./ehr/ehr.component";
import {Patient} from "../../../models/patient";

const routes: Routes = [
  {
    path: ':patientCode',
    component: PatientComponent,
    children: [
      {
        path: '',
        component: PatientDetailComponent
      },
      {
        path: 'ehr',
        component: EhrComponent
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
