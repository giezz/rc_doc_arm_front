import {Component, inject, OnInit} from '@angular/core';
import {Patient} from "../../../../../models/patient";
import {MyPatientService} from "../../../../../services/my-patient.service";

@Component({
  selector: 'app-my-patients-list',
  templateUrl: './my-patients-list.component.html',
  styleUrls: ['./my-patients-list.component.css']
})
export class MyPatientsListComponent implements OnInit {

  myPatientService: MyPatientService = inject(MyPatientService)

  patients: Patient[] = [];

  ngOnInit(): void {
    this.myPatientService.getMyPatients().subscribe(patients => {
      this.patients = patients
      }
    )
  }


}
