import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RehabProgramComponent} from "./rehab-program.component";
import {RehabDetailComponent} from "./rehab-detail/rehab-detail.component";

const routes: Routes = [
  {
    path: '',
    component: RehabProgramComponent,
    children: [
      {
        path: '',
        component: RehabDetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RehabProgramRoutingModule {
}
