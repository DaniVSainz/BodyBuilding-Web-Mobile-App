import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {AuthService} from "../../services/auth.service";

import { Workout } from '../workout';
import { WorkoutService } from '../../services/workout.service';
import {Angular2TokenService} from "angular2-token";
import {Exercise} from '../show-workout/exercise';

@Component({
  selector: 'app-exercise-show',
  templateUrl: './exercise-show.component.html',
  styleUrls: ['./exercise-show.component.sass'],
  providers: [WorkoutService]
})

export class ExerciseShowComponent implements OnInit {
  workouts: Workout;

  constructor(
    private http: Http,
    protected authService:AuthService,
    public workoutService: WorkoutService,
    private route: ActivatedRoute,
    public authTokenService:Angular2TokenService,
  ){}

  ngOnInit() {
    let workoutRequest = this.route.params
        .flatMap((params: Params)=> this.workoutService.getShowWorkouts(+params['id']));
    workoutRequest.subscribe(response => this.workouts = response.json());
  }

}
