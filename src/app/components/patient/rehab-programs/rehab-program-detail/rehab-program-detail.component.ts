import {Component, Input, OnInit} from '@angular/core';
import {RehabProgram} from "../../../../models/rehab-program";
import {TuiStatus} from "@taiga-ui/kit";

@Component({
  selector: 'app-rehab-program-detail',
  templateUrl: './rehab-program-detail.component.html',
  styleUrls: ['./rehab-program-detail.component.css']
})
export class RehabProgramDetailComponent implements OnInit {

    @Input()
    rehabProgram: RehabProgram;
    status: TuiStatus;
    value: string;

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
