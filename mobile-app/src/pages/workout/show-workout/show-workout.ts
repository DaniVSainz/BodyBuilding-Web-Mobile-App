import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Workout} from '../../../interfaces/workout';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
// import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';
import { WorkoutService } from '../../../providers/workout-service/workout-service';
import {Angular2TokenService} from "angular2-token";
import {Exercise} from '../../../interfaces/exercise';



@IonicPage()
@Component({
  selector: 'page-show-workout',
  templateUrl: 'show-workout.html',
})
export class ShowWorkoutPage implements OnInit {
  exercise = new Exercise;
  submitted: boolean = false;
  errorMessage: string;
  workouts: any;
  workout: any;
  reloadWorkouts: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http,
              // protected authService:AuthService,
              public workoutService: WorkoutService,
              public authTokenService:Angular2TokenService,
    ) {
    // let workoutRequest = this.workoutService.getShowWorkouts(+params['id']));
    // workoutRequest.subscribe(response => this.workouts = response.json());
    this.workout = this.navParams.data;
    console.log(this.workout.id);
    this.workoutService.getShowWorkouts(this.workout.id).subscribe(response => this.workouts = response.json());;
  }

  ngOnInit(){
    // this.workout = this.navParams.data;
    // console.log(this.workout.id);
    // let workoutRequest = this.workoutService.getShowWorkouts(this.workout.id);
    // workoutRequest.subscribe(response => this.workouts = response.json());
    // console.log(this.workouts);
    console.log(this.workouts);

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

  // goToShowExerciseSet(exercise: Exercise): void{
  //   let link = ['/exercise-show', exercise.id ]
  //   this.router.navigate(link);
  // }




}
