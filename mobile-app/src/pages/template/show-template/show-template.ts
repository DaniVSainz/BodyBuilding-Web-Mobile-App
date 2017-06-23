import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
// import {AuthService} from "../../services/auth.service";
import { WorkoutService } from '../../../providers/workout-service/workout-service';
import {Angular2TokenService} from "angular2-token";
import { WorkoutTemplate } from '../../../interfaces/workoutTemplate';


@IonicPage()
@Component({
  selector: 'page-show-template',
  templateUrl: 'show-template.html',
})
export class ShowTemplatePage {
  template: any;
  exerciseTemplates:any;

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
    this.workoutService.getExerciseTemplates(this.template.id).subscribe(response => this.exerciseTemplates = response.json());;
    console.log(this.exerciseTemplates);
  }


}
