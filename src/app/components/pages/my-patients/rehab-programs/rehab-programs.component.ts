import {Component, Input} from '@angular/core';
import {RehabProgram} from "../../../../models/rehab-program";

@Component({
  selector: 'app-rehab-programs',
  templateUrl: './rehab-programs.component.html',
  styleUrls: ['./rehab-programs.component.css']
})
export class RehabProgramsComponent {

    @Input()
    rehabPrograms: RehabProgram[];
}
