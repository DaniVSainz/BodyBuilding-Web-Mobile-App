import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Workout } from '../workout';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-show-workout',
  templateUrl: './show-workout.component.html',
  styleUrls: ['./show-workout.component.sass'],
  providers: [WorkoutService]
})
export class ShowWorkoutComponent implements OnInit {
  workout: Workout[];
  errorMessage: string;

  constructor(
    private workoutService: WorkoutService,

  ) {}

  ngOnInit(){
    this.getShowWorkouts();
  }

  getShowWorkouts(){
    this.workoutService.getShowWorkouts().subscribe(workout=> this.workout= workout,error=> this.errorMessage = <any>error );
  }
}

