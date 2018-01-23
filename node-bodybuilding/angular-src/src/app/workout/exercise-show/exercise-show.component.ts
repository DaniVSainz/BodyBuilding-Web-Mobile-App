import { Exercise } from './../show-workout/exercise';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { Workout } from '../workout';
import {Exercise_set} from './exercise_set';

import { WorkoutService } from '../../services/workout.service';
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-exercise-show',
  templateUrl: './exercise-show.component.html',
  styleUrls: ['./exercise-show.component.scss'],
})

export class ExerciseShowComponent implements OnInit {
  exerciseId: string;
  exercise: Exercise


  constructor(
    private http: Http,
    protected authService:AuthService,
    public workoutService: WorkoutService,
    private route: ActivatedRoute,

  ){   

  }

  ngOnInit() {
    this.route.params.subscribe( params =>
      this.exerciseId = params['id']
     );
     this.workoutService.getExercise(this.exerciseId).subscribe(data => {
      this.exercise = data.obj;
    },
     err => {
       console.log(err);
       return false;
     }); 
  }

  postSet(set){
    // console.log(this.workout); this one shows next one dosent
    set.user = this.exercise.user;
    set.exercise = this.exerciseId;
    this.workoutService.postSet(set).subscribe(function(res){
      // console.log(res);
      set = res.obj;
      // this.workout.exercises.push(res.obj);
    });
    this.exercise.sets.push(set);
    console.log(this.exercise);
  }


}
