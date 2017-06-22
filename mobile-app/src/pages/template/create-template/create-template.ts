import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../../providers/workout-service/workout-service';
import { Observable } from 'rxjs/Rx';
import { Workout } from '../../../interfaces/workout';
import {AuthService} from "../../../providers/auth-service/auth-service";
import {Angular2TokenService} from "angular2-token";
/**
 * Generated class for the CreateTemplatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-template',
  templateUrl: 'create-template.html',
})
export class CreateTemplatePage {
  submitted: boolean = false;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public workoutService: WorkoutService,
              public authService: AuthService,
              public authTokenService: Angular2TokenService,
              ) {
  }

  createWorkout(template){

  template.user_id = this.authTokenService.currentUserData.id
    this.submitted = true;
    this.workoutService.createTemplate(template)
        .subscribe(
          data => {
            // this.navCtrl.push(ShowWorkoutPage, data)
            return true },
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
  }

}
