import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
// import {AuthService} from "../../services/auth.service";
import { WorkoutService } from '../../../providers/workout-service/workout-service';
import {Angular2TokenService} from "angular2-token";
import { WorkoutTemplate } from '../../../interfaces/workoutTemplate';
import {ExerciseTemplate} from '../../../interfaces/exerciseTemplate';


@IonicPage()
@Component({
  selector: 'page-show-template',
  templateUrl: 'show-template.html',
})
export class ShowTemplatePage {
  exerciseTemplate = new ExerciseTemplate;
  template: any;
  exerciseTemplates:any;
  submitted = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http,
              // protected authService:AuthService,
              public workoutService: WorkoutService,
              public authTokenService:Angular2TokenService,
    ) {}

  ngOnInit(){
    this.template = this.navParams.data;
    console.log(this.template)
    this.workoutService.getTemplate(this.template.workout_template_id).subscribe(response => this.exerciseTemplates = response.json());;
    console.log(this.exerciseTemplates);
  }


  createExerciseTemplate(exerciseTemplate){
    console.log(exerciseTemplate)
    exerciseTemplate.user_id = this.authTokenService.currentUserData.id
    exerciseTemplate.workout_template_id = this.exerciseTemplates[0].id
    this.submitted = true;
    this.workoutService.createExerciseTemplate(exerciseTemplate)
        .subscribe(
          data => {
            this.navCtrl.push(ShowTemplatePage, this.exerciseTemplate)
            return true},
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
  }

}
