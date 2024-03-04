import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramService} from "../../../services/rehab-program.service";
import {FormResult} from "../../../models/form-result";
import {Subscription} from "rxjs";
import {ComponentsService} from "../../../services/components.service";
import {RehabProgram} from "../../../models/rehab-program";
import {TuiDay} from "@taiga-ui/cdk";

@Component({
  selector: 'app-rehab-program-results',
  templateUrl: './rehab-program-results.component.html',
  styleUrls: ['./rehab-program-results.component.css']
})
export class RehabProgramResultsComponent implements OnInit, OnDestroy {

  private componentsService: ComponentsService = inject(ComponentsService);
  private rehabProgramService: RehabProgramService = inject(RehabProgramService);

  formResults: FormResult[] = [];
  subscription: Subscription = new Subscription();
  rehabProgram: RehabProgram;
  isLoaded: boolean = false;
  hasResults: boolean = false;

  ngOnInit(): void {
    this.getRehabProgram();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getRehabProgram() {
    const sub$ = this.componentsService.getRehabProgram().subscribe(
      {
        next: program => {
          this.rehabProgram = program;
          this.getFormResults(this.rehabProgram.id)
        },
        error: err => {
          console.log(err.message)
        }
      }
    )
    this.subscription.add(sub$);
  }

  getFormResults(programId: number) {
    const sub$ = this.rehabProgramService.getResults(programId).subscribe(
      {
        next: results => {
          this.formResults = results;
          this.hasResults = true
          this.isLoaded = true;
        },
        error: err => {
          console.log(err.message);
          this.hasResults = false
          this.isLoaded = true;
        }
      }
    );
    this.subscription.add(sub$);
  }

}
