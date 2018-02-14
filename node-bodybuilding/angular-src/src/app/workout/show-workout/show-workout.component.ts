import { Workout } from './../workout';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';


import { WorkoutService } from '../../services/workout.service';
import {Exercise} from './exercise';

@Component({
  selector: 'app-show-workout',
  templateUrl: './show-workout.component.html',
  styleUrls: ['./show-workout.component.scss'],
})
export class ShowWorkoutComponent implements OnInit {
  @Input() workout: Workout;

  data:Object;
  workoutId: string;
  exercise = new Exercise;

  constructor(
    private http: Http,
    protected authService:AuthService,
    public workoutService: WorkoutService,
    private router: Router,
    private route: ActivatedRoute,
  ){

  }


  ngOnInit(){  
    this.route.params.subscribe( params =>
      this.workoutId = params['id']
     );
     this.workoutService.getWorkout(this.workoutId).subscribe(data => {
      this.workout = data.obj;
    },
     err => {
       console.log(err);
       return false;
     }); 
  }

  createExercise2(exercise){
    let data;
    exercise.user = this.workout.user;
    exercise.workout = this.workoutId;
    this.workoutService.postExercise(exercise).subscribe(function(res){
      // console.log(res);
      this.data = res.obj;
      console.log(this.data);
      // this.workout.exercises.push(res.obj);
    });
    console.log(data);
    this.workout.exercises.push(data);
  }

  createExercise(exercise){
    exercise.user = this.workout.user;
    exercise.workout = this.workoutId;
    this.workoutService.postExercise(exercise).subscribe((res) => {
      this.workout.exercises.push(res.obj);
    });
  }

  goToShowExerciseSet(exercise){
    console.log(exercise);
    let link = ['/show-exercise', exercise._id ]
    this.router.navigate(link);
  }

  // goToShow(workout: Workout){
  //   let link = ['/show-workout', workout._id ]
  //   this.router.navigate(link);
  // }

}

