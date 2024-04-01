import {Component, Input} from '@angular/core';
import {RehabProgram} from "../../../../models/rehab-program";
import {TuiStatus} from "@taiga-ui/kit";

@Component({
    selector: 'app-rehab-detail-card',
    templateUrl: './rehab-detail-card.component.html',
    styleUrls: ['./rehab-detail-card.component.css']
})
export class RehabDetailCardComponent {

    @Input()
    rehabProgram: RehabProgram;

    readonly dropDownItems = ["Перейти к пациенту", "Перейти к программе реабилитации"]

    statusResolver(rehabProgram: RehabProgram): {status: TuiStatus, value: string} {
        if (rehabProgram.isCurrent) {
            return {status: "primary", value: "Текущая"}
        } else {
            return {status: "success", value: "Завершена"}
        }
    }

}
