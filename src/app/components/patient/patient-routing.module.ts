import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./patient.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";
import {EmcComponent} from "./emc/emc.component";
import {RehabProgramDetailComponent} from "../rehab-program/rehab-program-detail/rehab-program-detail.component";
import {RehabProgramsHistoryComponent} from "./rehab-programs-history/rehab-programs-history.component";
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
        path: 'rehab-programs-history',
        component: RehabProgramsHistoryComponent
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
