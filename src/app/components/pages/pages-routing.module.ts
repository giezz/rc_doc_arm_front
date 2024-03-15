import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientsComponent} from "./patients/patients.component";
import {RehabProgramsListComponent} from "./rehab-programs-list/rehab-programs-list.component";
import {PagesComponent} from "./pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'patients',
        component: PatientsComponent
      },
      {
        path: 'rehab-programs',
        component: RehabProgramsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
