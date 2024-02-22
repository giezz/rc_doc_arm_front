import {Component, inject, Inject, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Exercise} from "../../models/exercise";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {ExerciseService} from "../../services/exercise.service";

@Component({
  selector: 'app-add-exercise-dialog',
  templateUrl: './add-exercise-dialog.component.html',
  styleUrls: ['./add-exercise-dialog.component.css']
})
export class AddExerciseDialogComponent implements OnInit, OnDestroy{

  private readonly exercisesService: ExerciseService = inject(ExerciseService);

  exercises: Exercise[] = [];
  subscription: Subscription = new Subscription();
  isLoaded: boolean = false;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, number>,
  ) {
  }

  ngOnInit(): void {
    const sub$ = this.exercisesService.getAll().subscribe(
      exercise => {
        this.exercises = exercise;
        this.isLoaded = true;
      }
    );
    this.subscription.add(sub$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addExercise(exerciseId: number): void {
    this.context.completeWith(exerciseId);
  }
}
