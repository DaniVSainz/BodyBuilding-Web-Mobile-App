import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { Workout } from '../workout';
import {Angular2TokenService} from "angular2-token";
import {Exercise} from '../show-workout/exercise';
import {Exercise_set} from './exercise_set';

import { WorkoutService } from '../../services/workout.service';
import {AuthService} from "../../services/auth.service";
import {TimerService} from "../../services/timer.service";


@Component({
  selector: 'app-exercise-show',
  templateUrl: './exercise-show.component.html',
  styleUrls: ['./exercise-show.component.sass'],
  providers: [WorkoutService,TimerService]
})

export class ExerciseShowComponent implements OnInit {
  exercise: Exercise;
  exerciseSet = new Exercise_set;
  exerciseSets: any;
  submitted: boolean = false;
  errorMessage: string;

  constructor(
    private http: Http,
    protected authService:AuthService,
    public workoutService: WorkoutService,
    private route: ActivatedRoute,
    public authTokenService:Angular2TokenService,
    public timerService: TimerService
  ){}

  ngOnInit() {
    let workoutRequest = this.route.params
        .flatMap((params: Params)=> this.workoutService.getShowExercise(+params['id']));
    workoutRequest.subscribe(response => this.exercise = response.json());

   setTimeout(() => {this.getShowExerciseSet(this.exercise.id)} ,100);

  }


  getShowExerciseSet(exercise){
    this.workoutService.getShowExerciseSet(exercise).subscribe(response => this.exerciseSets = response.json());;
  }

  createExerciseSet(exerciseSet){

    // exerciseSet.user_id = this.authTokenService.currentUserData.id
    exerciseSet.exercise_id = this.exercise.id
    this.submitted = true;
    this.workoutService.createExerciseSet(exerciseSet)
        .subscribe(
          data => { return true },
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
    this.timerService.resetTimer();
    this.timerService.playTimer();

    setTimeout(() =>  this.workoutService.getShowExerciseSet(this.exercise.id).subscribe(response => this.exerciseSets = response.json()), 100)

  }


}
