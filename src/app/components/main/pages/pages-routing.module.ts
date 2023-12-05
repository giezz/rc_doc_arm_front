import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {AboutComponent} from "./about/about.component";
import {IcfComponent} from "./icf/icf.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {MyPatientsComponent} from "./my-patients/my-patients.component";
import {PatientsComponent} from "./patients/patients.component";
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
        path: 'my-patients',
        component: MyPatientsComponent
      },
      {
        path: 'exercises',
        component: ExercisesComponent
      },
      {
        path: 'icf',
        component: IcfComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
