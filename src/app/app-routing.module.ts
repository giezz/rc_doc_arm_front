import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AuthComponent} from "./components/login/auth.component";
import {canActivate} from "./auth/auth.guard";


const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [canActivate]
  },
  {
    path: '',
    loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule),
    canActivate: [canActivate]
  },

  {
    path: 'patient/:patientCode',
    loadChildren: () => import('./components/patient/patient.module').then(m => m.PatientModule),
    canActivate: [canActivate]
  },
  {
    path: 'patient/:patientCode/rehab-program',
    loadChildren: () => import('./components/rehab-program/rehab-program.module').then(m => m.RehabProgramModule),
    canActivate: [canActivate]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
