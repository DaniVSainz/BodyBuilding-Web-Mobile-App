import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExerciseSet} from '../../../interfaces/exercise_set';
import {Exercise} from '../../../interfaces/exercise';
import { WorkoutService } from '../../../providers/workout-service/workout-service';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {TimerServiceProvider} from '../../../providers/timer-service/timer-service';





@IonicPage()
@Component({
  selector: 'page-exercise-show',
  templateUrl: 'exercise-show.html',
})
export class ExerciseShowPage {
  exercise: Exercise;
  exerciseSet = new ExerciseSet;
  exerciseSets: any;
  submitted: boolean = false;
  errorMessage: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public workoutService: WorkoutService,
              public http:Http,
              public timerService: TimerServiceProvider  ) {
  }


  ngOnInit() {
  //   let workoutRequest = this.route.params
  //       .flatMap((params: Params)=> this.workoutService.getShowExercise(+params['id']));
  //   workoutRequest.subscribe(response => this.exercise = response.json());

  //  setTimeout(() => {this.getShowExerciseSet(this.exercise.id)} ,100);
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

  // alarm(){
  //   var audio = new Audio('/assets/ding.mp3');
  //   audio.play();
  // }





}
