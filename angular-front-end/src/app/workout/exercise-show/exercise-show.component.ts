import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {AuthService} from "../../services/auth.service";

import { Workout } from '../workout';
import { WorkoutService } from '../../services/workout.service';
import {Angular2TokenService} from "angular2-token";
import {Exercise} from '../show-workout/exercise';
import {Exercise_set} from './exercise_set';

@Component({
  selector: 'app-exercise-show',
  templateUrl: './exercise-show.component.html',
  styleUrls: ['./exercise-show.component.sass'],
  providers: [WorkoutService]
})

export class ExerciseShowComponent implements OnInit {
  exercise: Exercise;
  exerciseSet = new Exercise_set;
  submitted: boolean = false;
  errorMessage: string;
  workouts: any;

  constructor(
    private http: Http,
    protected authService:AuthService,
    public workoutService: WorkoutService,
    private route: ActivatedRoute,
    public authTokenService:Angular2TokenService,
  ){}

  ngOnInit() {
    let workoutRequest = this.route.params
        .flatMap((params: Params)=> this.workoutService.getShowExercise(+params['id']));
    workoutRequest.subscribe(response => this.exercise = response.json());

  }

  createExerciseSet(exerciseSet){
    console.log('exercise created')
    // exerciseSet.user_id = this.authTokenService.currentUserData.id
    exerciseSet.workout_id = this.workouts[0].id
    this.submitted = true;
    this.workoutService.createExerciseSet(exerciseSet)
        .subscribe(
          data => { return true },
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
    setTimeout(() =>  this.workoutService.getShowWorkouts(this.workouts[0].id).subscribe(response => this.workouts = response.json()), 100)
    // this.workoutService.getShowWorkouts(this.workouts[0].id).subscribe(response => this.workouts = response.json());
  }


}
