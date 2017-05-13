import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


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
    private router: Router,
  ) {}

  ngOnInit(){
    this.getWorkouts();
  }

  getWorkouts(){
    this.workoutService.getWorkouts().subscribe(workout=> this.workout= workout,error=> this.errorMessage = <any>error );
  }

  goToShow(workout: Workout): void{
    let link = ['/show-workout', workout.id ]
    this.router.navigate(link);
  }

}
