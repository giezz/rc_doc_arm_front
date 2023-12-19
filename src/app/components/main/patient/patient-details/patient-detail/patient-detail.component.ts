import {Component, inject, OnInit} from '@angular/core';
import {Patient} from "../../../../../models/patient";
import {ComponentsService} from "../../../../../services/components.service";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patientComponentsService: ComponentsService = inject(ComponentsService)

  patient: Patient | null = null;

  ngOnInit(): void {
    this.patient = this.patientComponentsService.getPatient()
  }
}
