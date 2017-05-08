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
  workouts: Workout[];

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


  }




  createExercise(exercise){
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
  }

}

