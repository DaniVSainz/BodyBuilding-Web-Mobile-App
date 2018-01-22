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
  providers: [WorkoutService]

})
export class WorkoutComponent implements OnInit {
  workouts: any[];
  errorMessage: string;
  test: string = 'ASDKAJSDKJASDK'

  constructor(
    // private workoutService: WorkoutService,
    private router: Router,
    private workoutService:WorkoutService,
  ) {
  }

  ngOnInit(){
    this.getWorkouts();
  }

  logWorkouts(){
    console.log(this.workouts);
  }



  getWorkouts(){
    this.workoutService.getWorkouts().subscribe(data => {
      this.workouts = data.obj;
    },
     err => {
       console.log(err);
       return false;
     });
  }

  goToShow(workout: Workout): void{
    // let link = ['/show-workout', workout.id ]
    // this.router.navigate(link);
  }

}
