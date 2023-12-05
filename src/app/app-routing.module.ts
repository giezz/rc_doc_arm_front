import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./components/auth/auth.component";


const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: '',
    loadChildren: () => import('./components/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./components/patient/patient.module').then(m => m.PatientModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
