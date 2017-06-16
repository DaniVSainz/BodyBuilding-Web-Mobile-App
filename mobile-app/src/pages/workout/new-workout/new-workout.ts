import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../../providers/workout-service/workout-service';
import { Observable } from 'rxjs/Rx';
import { Workout } from '../../../interfaces/workout';
import {AuthService} from "../../../providers/auth-service/auth-service";
import {Angular2TokenService} from "angular2-token";
import {ShowWorkoutPage} from '../show-workout/show-workout';
/**
 * Generated class for the NewWorkoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-workout',
  templateUrl: 'new-workout.html',
})
export class NewWorkoutPage {
workout = new Workout;
  workoutId: any;
  errorMessage: string;
  link: any;
  submitted: boolean = false;

  constructor(public authTokenService:Angular2TokenService,
    protected authService:AuthService,
    public workoutService: WorkoutService,
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {}

  ngOnInit() {
  }

  d = new Date();

  createWorkout(workout){

    workout.user_id = this.authTokenService.currentUserData.id
    this.submitted = true;
    this.workoutService.createWorkout(workout)
        .subscribe(
          data => {
            this.navCtrl.push(ShowWorkoutPage, data)
            return true },
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
  }

}
