import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { Workout } from '../workout';
import {Exercise} from '../show-workout/exercise';
import {Exercise_set} from './exercise_set';

import { WorkoutService } from '../../services/workout.service';
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-exercise-show',
  templateUrl: './exercise-show.component.html',
  styleUrls: ['./exercise-show.component.sass'],
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

  ){}

  ngOnInit() {
  }


}
