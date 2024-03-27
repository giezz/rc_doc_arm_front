import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RehabProgramRoutingModule} from './rehab-program-routing.module';
import {RehabProgramDetailComponent} from './rehab-program-detail/rehab-program-detail.component';
import {TuiAutoFocusModule, TuiLetModule} from "@taiga-ui/cdk";
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiLoaderModule, TuiNotificationModule,
    TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {AddFormDialogComponent} from "../../dialogs/add-form-dialog/add-form-dialog.component";
import {AddModuleDialogComponent} from "../../dialogs/add-module-dialog/add-module-dialog.component";
import {TuiInputDateRangeModule, TuiInputModule, TuiTextareaModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBlockComponent} from './rehab-program-detail/form-block/form-block.component';
import {ModulesBlockComponent} from './rehab-program-detail/modules-block/modules-block.component';
import {RehabProgramResultsComponent} from './rehab-program-results/rehab-program-results.component';
import {ProtocolComponent} from './protocol/protocol.component';
import {TuiAxesModule, TuiLineChartModule, TuiLineDaysChartModule} from "@taiga-ui/addon-charts";
import {SharedModule} from "../shared/shared.module";
import {ModuleFormResultComponent} from "./rehab-program-results/module-form-result/module-form-result.component";
import { ProgramFormResultComponent } from './rehab-program-results/program-form-result/program-form-result.component';


@NgModule({
    declarations: [
        RehabProgramDetailComponent,
        AddFormDialogComponent,
        AddModuleDialogComponent,
        FormBlockComponent,
        ModulesBlockComponent,
        RehabProgramResultsComponent,
        ProtocolComponent,
        ModuleFormResultComponent,
        ProgramFormResultComponent
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
        TuiLabelModule,
        TuiLoaderModule,
        TuiLineDaysChartModule,
        TuiLineChartModule,
        TuiAxesModule,
        TuiInputDateRangeModule,
        TuiLinkModule,
        TuiTextareaModule,
        ReactiveFormsModule,
        SharedModule,
        TuiNotificationModule
    ]
})
export class RehabProgramModule {
}
