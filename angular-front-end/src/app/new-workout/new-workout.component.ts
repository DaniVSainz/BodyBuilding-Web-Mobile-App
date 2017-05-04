import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { Observable } from 'rxjs/Rx';
import { Workout } from '../workout/workout';
@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.sass']
})
export class NewWorkoutComponent implements OnInit {
  workout = new Workout;
  submitted: boolean = false;
  constructor(
    public workoutService: WorkoutService
  ) {}

  ngOnInit() {
  }

  d = new Date();

  createWorkout(workout){
    this.submitted = true;
    this.workoutService.createWorkout(workout)
        .subscribe(
          data => { return true },
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
  }

}
