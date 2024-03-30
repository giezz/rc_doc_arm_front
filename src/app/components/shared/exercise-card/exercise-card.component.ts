import {Component, Input} from '@angular/core';
import {Exercise} from "../../../models/exercise";

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent {
    @Input()
    exercise: Exercise;
}
