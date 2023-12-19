import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientComponent} from "../patient.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";
import {EhrComponent} from "./ehr/ehr.component";
import {PatientDetailsComponent} from "./patient-details.component";
import {RehabHistoryComponent} from "./rehab-history/rehab-history.component";

const routes: Routes = [
  {
    path: '',
    component: PatientDetailsComponent,
    children: [
      {
        path: '',
        component: PatientDetailComponent
      },
      {
        path: 'ehr',
        component: EhrComponent
      },
      {
        path: 'rehab-history',
        component: RehabHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientDetailsRoutingModule { }
