import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit, OnDestroy {

    private rehabProgramService: RehabProgramService = inject(RehabProgramService);

  activeItemIndex: number = 0;

  rehabPrograms: RehabProgram[];
  subscription: Subscription = new Subscription();

  ngOnInit() {
    console.log('MyPatientsComponent');
    const sub$ = this.rehabProgramService.getListByCurrentDoctor().subscribe(
        {
            next: programs => {
                this.rehabPrograms = programs;
            }
        }
    );
    this.subscription.add(sub$);
  }

  ngOnDestroy() {
    console.log('MyPatientsComponent destroyed');
    this.subscription.unsubscribe();
  }
}
