import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../../providers/workout-service/workout-service';
import { Observable } from 'rxjs/Rx';
import { WorkoutTemplate } from '../../../interfaces/workoutTemplate';
import {AuthService} from "../../../providers/auth-service/auth-service";
import {Angular2TokenService} from "angular2-token";
import {ShowTemplatePage} from '../show-template/show-template';
/**
 * Generated class for the GetTemplatesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-get-templates',
  templateUrl: 'get-templates.html',
})
export class GetTemplatesPage {

  workoutTemplates : WorkoutTemplate[];
  errorMessage: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public workoutService: WorkoutService,
              public authService: AuthService,
              public authTokenService: Angular2TokenService,
              ) {
  }

  ngOnInit(){
    this.getTemplates();
  }

  getTemplates(){
    this.workoutService.getTemplates().subscribe(workoutTemplates=> this.workoutTemplates= workoutTemplates,error=> this.errorMessage = <any>error );
  }

  goToTemplate(template: WorkoutTemplate): void{
    this.navCtrl.push(ShowTemplatePage,template);
  }

}
