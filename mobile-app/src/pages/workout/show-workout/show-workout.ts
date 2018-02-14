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
import {ExerciseShowPage} from '../exercise-show/exercise-show';



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

  }

  ngOnInit(){
    this.workout = this.navParams.data;
    console.log(this.workout)
    this.workoutService.getWorkout(this.workout.id).subscribe(response => this.workouts = response.json());;
  }

  reloadExercise(workout){
    this.workoutService.getWorkout(workout).subscribe(response => this.workouts = response.json());;
  }



  createExercise(exercise){
    console.log('exercise created')
    exercise.user_id = this.authTokenService.currentUserData.id
    exercise.workout_id = this.workouts[0].id
    this.submitted = true;
    this.workoutService.postExercise(exercise)
    // this.workoutService.getShowWorkouts(this.workouts[0].id).subscribe(response => this.workouts = response.json())
        .subscribe(
          data => {
            // this.exerciseForm.reset()
            this.navCtrl.pop();
            this.navCtrl.push(ShowWorkoutPage, this.workout)
            return true},
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
    // setTimeout(() =>  this.workoutService.getShowWorkouts(this.workouts[0].id).subscribe(response => this.workouts = response.json()), 100)
  }

   deleteWorkout(exercise){
    this.workoutService.deleteWorkout(exercise).subscribe(
          res => {
            console.log("deleted")
            this.navCtrl.pop();
            this.navCtrl.push(ShowWorkoutPage);
            return true},
          error => {
            console.log("Error deleting workout");
            return Observable.throw(error);
          }
      )
  }


  goToShowExercise(exercise: any){
    this.navCtrl.push(ExerciseShowPage, exercise);
  }




}
