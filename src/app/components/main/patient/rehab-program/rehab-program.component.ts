import {Component, inject, OnInit} from '@angular/core';
import {ComponentsService} from "../../../../services/components.service";
import {Patient} from "../../../../models/patient";
import {RehabProgramService} from "../../../../services/rehab-program.service";

@Component({
  selector: 'app-rehab-program',
  templateUrl: './rehab-program.component.html',
  styleUrls: ['./rehab-program.component.css', '../patient.component.css']
})
export class RehabProgramComponent implements OnInit {

  componentsService: ComponentsService = inject(ComponentsService)
  rehabService: RehabProgramService = inject(RehabProgramService)

  activeItemIndex: number = 0;

  ngOnInit(): void {
    if (this.componentsService.getPatient()){
      let patient: Patient = this.componentsService.getPatient()!
      this.componentsService.setRehabProgram(
        this.rehabService.getCurrent(patient)
      )
    }
  }
}
