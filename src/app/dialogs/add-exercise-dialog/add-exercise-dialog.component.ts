import {Component, Inject} from '@angular/core';
import {TuiDialogContext} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'app-add-exercise-dialog',
  templateUrl: './add-exercise-dialog.component.html',
  styleUrls: ['./add-exercise-dialog.component.css']
})
export class AddExerciseDialogComponent {

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, number>,
  ) {
  }

  addExercise(exerciseId: number): void {
    this.context.completeWith(exerciseId);
  }
}
