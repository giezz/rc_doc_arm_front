import {Component, inject, OnInit} from '@angular/core';
import {Patient} from "../../../../models/patient";
import {ComponentsService} from "../../../../services/components.service";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css', '../patient.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patientComponentsService: ComponentsService = inject(ComponentsService);

  patient: Patient | null = null;
  activeItemIndex: number = 0;

  ngOnInit(): void {
    this.patient = this.patientComponentsService.getPatient();
  }
}
