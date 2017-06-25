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
    this.workoutService.getTemplate(this.template.id).subscribe(response => this.exerciseTemplates = response.json());;
    console.log(this.exerciseTemplates);
  }


  createExerciseTemplate(template){
    console.log('exercise created')
    template.user_id = this.authTokenService.currentUserData.id
    template.workout_template_id = this.exerciseTemplates[0].id
    this.submitted = true;
    this.workoutService.createExerciseTemplate(template)
    // this.workoutService.getShowWorkouts(this.workouts[0].id).subscribe(response => this.workouts = response.json())
        .subscribe(
          data => {
            this.navCtrl.pop();
            // this.navCtrl.push(ShowWorkoutPage, this.workout)
            return true},
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
  }

}
