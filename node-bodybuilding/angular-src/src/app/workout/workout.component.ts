import { WorkoutService } from './../services/workout.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


import { Workout } from './workout';
// import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
  // providers: [WorkoutService]

})
export class WorkoutComponent implements OnInit {
  workout: Workout[];
  errorMessage: string;

  constructor(
    // private workoutService: WorkoutService,
    private router: Router,
    private workoutService:WorkoutService

  ) {}

  ngOnInit(){
    this.workoutService.getWorkouts().subscribe(function(data){
      console.log(data);
      console.log('after data on init')
    });
  }

  getWorkouts(){
    this.workoutService.getWorkouts().subscribe(function(data){
      console.log(data);
      console.log('after data on init')
    });
  }

  goToShow(workout: Workout): void{
    let link = ['/show-workout', workout.id ]
    this.router.navigate(link);
  }

}
