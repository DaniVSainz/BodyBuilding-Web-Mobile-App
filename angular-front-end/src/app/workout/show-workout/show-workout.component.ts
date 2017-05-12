import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {AuthService} from "../../services/auth.service";

import { Workout } from '../workout';
import { WorkoutService } from '../../services/workout.service';
import {Angular2TokenService} from "angular2-token";
import {Exercise} from './exercise';

@Component({
  selector: 'app-show-workout',
  templateUrl: './show-workout.component.html',
  styleUrls: ['./show-workout.component.sass'],
  providers: [WorkoutService]
})
export class ShowWorkoutComponent implements OnInit {
  exercise = new Exercise;
  submitted: boolean = false;
  errorMessage: string;
  workouts: any;
  reloadWorkouts: any;
  private _trialEndsAt;

  private _diff: number;

  private _days: number;

  private _hours: number;

  private _minutes: number;

  private _seconds: number;


  constructor(
    private http: Http,
    protected authService:AuthService,
    public workoutService: WorkoutService,
    private route: ActivatedRoute,
    public authTokenService:Angular2TokenService,
  ){}

 @Input()
  workout: Workout;

  ngOnInit(): void{
    let timer = Observable.timer(0, 5000)
    let workoutRequest = this.route.params
        .flatMap((params: Params)=> this.workoutService.getShowWorkouts(+params['id']));
    workoutRequest.subscribe(response => this.workouts = response.json());

    this._trialEndsAt = "2017-02-28";

    Observable.interval(1000).map((x) => {
            this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
        }).subscribe((x) => {
            this._days = this.getDays(this._diff);
            this._hours = this.getHours(this._diff);
            this._minutes = this.getMinutes(this._diff);
            this._seconds = this.getSeconds(this._diff);
        });
  }


  reloadExercise(workout){
    this.workoutService.getShowWorkouts(workout).subscribe(response => this.workouts = response.json());;
  }


  createExercise(exercise){
    console.log('exercise created')
    exercise.user_id = this.authTokenService.currentUserData.id
    exercise.workout_id = this.workouts[0].id
    this.submitted = true;
    this.workoutService.createExercise(exercise)
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


  getDays(t){
    return Math.floor( t/(1000*60*60*24) );
}

getHours(t){
    return Math.floor( (t/(1000*60*60)) % 24 );
}

getMinutes(t){
    return Math.floor( (t/1000/60) % 60 );
}

getSeconds(t){
    return Math.floor( (t/1000) % 60 );
}

}

