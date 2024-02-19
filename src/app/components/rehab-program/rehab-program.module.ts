import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RehabProgramRoutingModule } from './rehab-program-routing.module';
import { RehabProgramDetailComponent } from './rehab-program-detail/rehab-program-detail.component';
import {TuiAutoFocusModule, TuiLetModule} from "@taiga-ui/cdk";
import {TuiButtonModule, TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {SelectFormDialogComponent} from "../../dialogs/select-form-dialog/select-form-dialog.component";
import {AddModuleDialogComponent} from "../../dialogs/add-module-dialog/add-module-dialog.component";
import {TuiInputModule} from "@taiga-ui/kit";
import {FormsModule} from "@angular/forms";
import { FormBlockComponent } from './rehab-program-detail/form-block/form-block.component';
import { ModulesBlockComponent } from './rehab-program-detail/modules-block/modules-block.component';
import { RehabProgramResultsComponent } from './rehab-program-results/rehab-program-results.component';
import { ProtocolComponent } from './protocol/protocol.component';


@NgModule({
  declarations: [
    RehabProgramDetailComponent,
    SelectFormDialogComponent,
    AddModuleDialogComponent,
    FormBlockComponent,
    ModulesBlockComponent,
    RehabProgramResultsComponent,
    ProtocolComponent
  ],
  imports: [
    CommonModule,
    RehabProgramRoutingModule,
    TuiLetModule,
    TuiButtonModule,
    TuiInputModule,
    TuiAutoFocusModule,
    TuiTextfieldControllerModule,
    FormsModule,
    TuiLabelModule
  ]
})
export class RehabProgramModule { }
