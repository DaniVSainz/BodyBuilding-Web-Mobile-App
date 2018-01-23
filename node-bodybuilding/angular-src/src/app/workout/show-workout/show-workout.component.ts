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
  @Input() workout: any;

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
     console.log(this.workout)
  }

  createExercise(exercise){
    // console.log(this.workout); this one shows next one dosent
    exercise.user = this.workout.user;
    exercise.workout = this.workoutId;
    this.workoutService.postExercise(exercise).subscribe(function(res){
      // console.log(res);
      exercise = res.obj;
      // this.workout.exercises.push(res.obj);
    });
    this.workout.exercises.push(exercise);
    console.log(this.workout);
  }

  goToShowExerciseSet(exercise){
    let link = ['/show-exercise', exercise._id ]
    this.router.navigate(link);
  }

  // goToShow(workout: Workout){
  //   let link = ['/show-workout', workout._id ]
  //   this.router.navigate(link);
  // }

}

