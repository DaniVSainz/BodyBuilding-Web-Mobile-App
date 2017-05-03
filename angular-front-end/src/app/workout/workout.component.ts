import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Workout } from './workout';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.sass'],
  providers: [WorkoutService]
})
export class WorkoutComponent implements OnInit {
  workout: Workout[];
  errorMessage: string;

  constructor(
    private workoutService: WorkoutService,
  ) {}

  ngOnInit(){
    this.getWorkouts();
  }

  getWorkouts(){
    this.workoutService.getWorkouts().subscribe(workout=> this.workout= workout,error=> this.errorMessage = <any>error );
  }

}
