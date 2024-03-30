import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ExerciseService} from "../../../services/exercise.service";
import {Observable} from "rxjs";
import {Exercise} from "../../../models/exercise";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit, OnDestroy {

    private exercisesService: ExerciseService = inject(ExerciseService);

    exercises$: Observable<Exercise[]>;

    ngOnInit() {
        this.exercises$ = this.exercisesService.getAll();
    }

    ngOnDestroy() {
    }

    fetchExercises() {
        return this.exercisesService.getAll();
    }

    searchExercises() {

    }
}
