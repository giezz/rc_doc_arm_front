import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main.component";
import {HomeComponent} from "./home/home.component";
import {PatientsComponent} from "./patients/patients.component";
import {MyPatientsComponent} from "./my-patients/my-patients.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {IcfComponent} from "./icf/icf.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
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
export class MainRoutingModule { }
