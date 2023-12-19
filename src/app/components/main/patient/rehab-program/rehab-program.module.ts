import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RehabProgramRoutingModule } from './rehab-program-routing.module';
import { RehabDetailComponent } from './rehab-detail/rehab-detail.component';
import {TuiButtonModule} from "@taiga-ui/core";
import { ModulesBlockComponent } from './rehab-detail/modules-block/modules-block.component';
import { FormBlockComponent } from './rehab-detail/form-block/form-block.component';


@NgModule({
  declarations: [
    RehabDetailComponent,
    ModulesBlockComponent,
    FormBlockComponent
  ],
  imports: [
    CommonModule,
    RehabProgramRoutingModule,
    TuiButtonModule
  ]
})
export class RehabProgramModule { }
