import {Component, Input, OnInit} from '@angular/core';
import {RehabProgram} from "../../../../models/rehab-program";
import {TuiStatus} from "@taiga-ui/kit";

@Component({
    selector: 'app-rehab-detail-card',
    templateUrl: './rehab-detail-card.component.html',
    styleUrls: ['./rehab-detail-card.component.css']
})
export class RehabDetailCardComponent implements OnInit {

    @Input()
    rehabProgram: RehabProgram;

    status: TuiStatus;
    value: string;

    readonly dropDownItems = ["Перейти к пациенту", "Перейти к программе реабилитации"]

    ngOnInit() {
        if (this.rehabProgram.isCurrent) {
            this.status = "primary";
            this.value = "Текущая";
        } else {
            this.status = "success";
            this.value = "Завершена";
        }
    }

}
