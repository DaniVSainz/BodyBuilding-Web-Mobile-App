import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../../providers/workout-service/workout-service';
import { Observable } from 'rxjs/Rx';
import { WorkoutTemplate } from '../../../interfaces/workoutTemplate';
import {AuthService} from "../../../providers/auth-service/auth-service";
import {Angular2TokenService} from "angular2-token";
import {GetTemplatesPage} from '../get-templates/get-templates';
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
  workoutTemplate= new WorkoutTemplate;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public workoutService: WorkoutService,
              public authService: AuthService,
              public authTokenService: Angular2TokenService,
              ) {
  }

  createTemplate(workoutTemplate){
    console.log(workoutTemplate);
    workoutTemplate.user_id = this.authTokenService.currentUserData.id
    this.submitted = true;
    this.workoutService.createTemplate(workoutTemplate)
        .subscribe(
          data => {
            this.navCtrl.push(GetTemplatesPage)
            console.log(workoutTemplate)
            return true },
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
  }

}
