import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./patient.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";
import {EhrComponent} from "./ehr/ehr.component";

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
export class PatientRoutingModule { }
