import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthGuard} from '../../guards/auth.guard';
import { HomePage } from '../../pages/home/home';
import {WorkoutService} from '../../providers/workout-service/workout-service'
import {Workout} from '../../interfaces/workout';
import {ShowWorkoutPage} from './show-workout/show-workout';
import { Observable } from 'rxjs/Rx';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
  providers: [AuthGuard,HomePage]
})
export class WorkoutPage {
  workouts: Workout[];
  errorMessage: string;

  constructor(public navCtrl: NavController,public authGuard: AuthGuard, public workoutService: WorkoutService,private alertCtrl: AlertController) {

  }

  ionViewCanEnter() {
    this.authGuard.canActivate();
    if(this.authGuard.canActivate()){
    }else{
      this.navCtrl.push(HomePage);
    }
  }

  ngOnInit(){
    this.getWorkouts();
  }

  getWorkouts(){
    this.workoutService.getWorkouts().subscribe(workout=> this.workouts= workout,error=> this.errorMessage = <any>error );
  }

  goToWorkout(workout: Workout): void{
    this.navCtrl.push(ShowWorkoutPage,workout);
  }

  deleteWorkout(workout){
    this.workoutService.deleteWorkout(workout).subscribe(
          res => {
            console.log("deleted")
            this.navCtrl.pop();
            this.navCtrl.push(WorkoutPage)
            return true},
          error => {
            console.log("Error deleting workout");
            return Observable.throw(error);
          }
      )
  }


  showConfirm(workout) {
    let confirm = this.alertCtrl.create({
      title: 'Delete' + "  " + workout.name,
      message: 'This deletes all the exercises and sets aswell.',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.deleteWorkout(workout);
          }
        }
      ]
    });
    confirm.present();
  }

}
