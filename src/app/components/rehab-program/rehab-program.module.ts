import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RehabProgramRoutingModule} from './rehab-program-routing.module';
import {RehabProgramDetailComponent} from './rehab-program-detail/rehab-program-detail.component';
import {TuiAutoFocusModule, TuiLetModule} from "@taiga-ui/cdk";
import {TuiButtonModule, TuiLabelModule, TuiLoaderModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {AddFormDialogComponent} from "../../dialogs/add-form-dialog/add-form-dialog.component";
import {AddModuleDialogComponent} from "../../dialogs/add-module-dialog/add-module-dialog.component";
import {TuiInputDateRangeModule, TuiInputModule} from "@taiga-ui/kit";
import {FormsModule} from "@angular/forms";
import {FormBlockComponent} from './rehab-program-detail/form-block/form-block.component';
import {ModulesBlockComponent} from './rehab-program-detail/modules-block/modules-block.component';
import {RehabProgramResultsComponent} from './rehab-program-results/rehab-program-results.component';
import {ProtocolComponent} from './protocol/protocol.component';
import {TuiAxesModule, TuiLineChartModule, TuiLineDaysChartModule} from "@taiga-ui/addon-charts";
import { ResultDetailSingleComponent } from './rehab-program-results/result-detail-single/result-detail-single.component';


@NgModule({
    declarations: [
        RehabProgramDetailComponent,
        AddFormDialogComponent,
        AddModuleDialogComponent,
        FormBlockComponent,
        ModulesBlockComponent,
        RehabProgramResultsComponent,
        ProtocolComponent,
        ResultDetailSingleComponent
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
        TuiInputDateRangeModule
    ]
})
export class RehabProgramModule {
}
