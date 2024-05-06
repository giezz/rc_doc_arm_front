import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RehabProgramRoutingModule} from './rehab-program-routing.module';
import {RehabProgramDetailComponent} from './rehab-program-detail/rehab-program-detail.component';
import {TuiAutoFocusModule, TuiLetModule} from "@taiga-ui/cdk";
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {
    TuiAccordionModule,
    TuiBadgeModule,
    TuiInputDateRangeModule,
    TuiInputModule,
    TuiTextareaModule
} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBlockComponent} from './rehab-program-detail/form-block/form-block.component';
import {ModuleBlockComponent} from './rehab-program-detail/module-block/module-block.component';
import {RehabProgramResultsComponent} from './rehab-program-results/rehab-program-results.component';
import {ProtocolComponent} from './protocol/protocol.component';
import {TuiAxesModule, TuiLineChartModule, TuiLineDaysChartModule} from "@taiga-ui/addon-charts";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    declarations: [
        RehabProgramDetailComponent,
        FormBlockComponent,
        ModuleBlockComponent,
        RehabProgramResultsComponent,
        ProtocolComponent
    ],
    exports: [
        RehabProgramDetailComponent
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
        TuiNotificationModule,
        TuiAccordionModule,
        TuiBadgeModule
    ]
})
export class RehabProgramModule {
}
