import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RehabProgramComponent} from "./rehab-program.component";
import {RehabProgramDetailComponent} from "./rehab-program-detail/rehab-program-detail.component";
import {RehabProgramResultsComponent} from "./rehab-program-results/rehab-program-results.component";
import {ProtocolComponent} from "./protocol/protocol.component";

const routes: Routes = [
  {
    path: '',
    component: RehabProgramComponent,
    children: [
      {
        path: '',
        component: RehabProgramDetailComponent
      },
      {
        path: 'results',
        component: RehabProgramResultsComponent
      },
      {
        path: 'protocol',
        component: ProtocolComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RehabProgramRoutingModule { }
