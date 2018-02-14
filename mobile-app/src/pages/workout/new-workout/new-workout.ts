import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../../providers/workout-service/workout-service';
import { Observable } from 'rxjs/Rx';
import { Workout } from '../../../interfaces/workout';
import {AuthService} from "../../../providers/auth-service/auth-service";
import {Angular2TokenService} from "angular2-token";
import {ShowWorkoutPage} from '../show-workout/show-workout';
import {WorkoutTemplate} from '../../../interfaces/workoutTemplate'
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-new-workout',
  templateUrl: 'new-workout.html',
})
export class NewWorkoutPage implements OnInit   {
  myArray: any;
  workout = new Workout;
  workoutId: any;
  workoutTemplates : WorkoutTemplate[];
  errorMessage: string;
  link: any;
  submitted: boolean = false;
  title:string;
  id: number;

  templateForm:FormGroup;

  constructor(public authTokenService:Angular2TokenService,
    protected authService:AuthService,
    public workoutService: WorkoutService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder:FormBuilder
  ) {
    this.templateForm=formBuilder.group({
      'id': ["",Validators.required],
      // 'id': ['',Validators.required]
    })
  }



  ngOnInit() {
    this.getTemplates();
  }
  ionViewDidEnter(){
    console.log(this.workoutTemplates)
  }

  getTemplates(){
    this.workoutService.getTemplates().subscribe(workoutTemplates=> this.workoutTemplates= workoutTemplates,error=> this.errorMessage = <any>error );
  }

  d = new Date();

  createWorkout(workout){
    // workout.user_id = this.authTokenService.currentUserData.id
    // this.submitted = true;
    // this.workoutService.createWorkout(workout)
    //     .subscribe(
    //       data => {
    //         this.navCtrl.push(ShowWorkoutPage, data)
    //         return true },
    //       error => {
    //         console.log("Error saving proposal");
    //         return Observable.throw(error);
    //       }
    //     )
  }

//
//  Template Work Space, Form && CreateTemplate Func
//




  createWorkoutFromTemplate(workout){

  //   this.workoutTemplates.forEach(function (template) {
  //     if (template.id == workout.id){
  //       workout.name = template.title;
  //       workout.id = null;
  //     }
  //   })



  //   workout.user_id = this.authTokenService.currentUserData.id
  //   this.submitted = true;
  //   console.log(workout)
  //   this.workoutService.createWorkout(workout)
  //       .subscribe(
  //         data => {
  //           this.navCtrl.push(ShowWorkoutPage, data)
  //           return true },
  //         error => {
  //           console.log("Error saving proposal");
  //           return Observable.throw(error);
  //         }
  //       )
  }

}
