import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {ComponentsService} from "../../services/components.service";
import {RehabProgramService} from "../../services/rehab-program.service";
import {Patient} from "../../models/patient";
import {Observable, of, Subscription, switchMap, tap} from "rxjs";
import {RehabProgram} from "../../models/rehab-program";
import {Location} from "@angular/common";

@Component({
  selector: 'app-rehab-program',
  templateUrl: './rehab-program.component.html',
  styleUrls: ['./rehab-program.component.css', '../../app.component.css']
})
export class RehabProgramComponent implements OnInit, OnDestroy {

  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private patientService: PatientService = inject(PatientService);
  private componentsService: ComponentsService = inject(ComponentsService);
  private location: Location = inject(Location);

  patient$: Observable<Patient>;

  ngOnInit(): void {
    console.log('RehabProgramComponent');
    let patientCode: number = Number(this.activeRoute.snapshot.params['patientCode']);
    this.patient$ = this.patientService.getByCode(patientCode);
    this.componentsService.setPatient(this.patient$);
    this.componentsService.setRehabProgram(this.patientService.getCurrentRehabProgram(patientCode));
  }

  ngOnDestroy(): void {
    console.log('RehabProgramComponent destroyed');
  }

  goBack() {
    this.location.back();
  }
}
