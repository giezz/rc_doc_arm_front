import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {ExerciseService} from "../../../services/exercise.service";
import {Observable} from "rxjs";
import {Exercise} from "../../../models/exercise";
import {FormControl, FormGroup} from "@angular/forms";
import {PageableResponse} from "../../../models/pageable-response";
import {TuiTablePagination} from "@taiga-ui/addon-table";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css', '../pages.component.css']
})
export class ExercisesComponent implements OnInit {

    @Input()
    asAddExerciseDialog = false;

    @Output()
    onButtonPressed = new EventEmitter<number>()
    buttonPressed(exerciseId: number) {
        this.onButtonPressed.emit(exerciseId)
    }

    private exercisesService: ExerciseService = inject(ExerciseService);

    data$: Observable<PageableResponse<Exercise>> = new Observable<PageableResponse<Exercise>>();
    pageSizes: number[] = [10, 15, 25, 50, 100];
    page: number = 0;
    size: number = this.pageSizes[0];

    searchExercises = new FormGroup({
        exerciseName: new FormControl()
    })

    ngOnInit() {
        this.onSubmit();
    }

    onSubmit() {
        this.page = 0;
        this.data$ = this.getData(this.page, this.size);
    }

    paginationChange(pagination: TuiTablePagination) {
        this.data$ = this.getData(pagination.page, pagination.size);
        this.page = pagination.page;
        this.size = pagination.size
    }

    private getData(page: number, size: number) {
        return this.exercisesService.getAll(page, size, this.searchExercises.value.exerciseName)
    }
}
