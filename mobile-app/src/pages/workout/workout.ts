import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthGuard} from '../../guards/auth.guard';
import { HomePage } from '../../pages/home/home';
import {WorkoutService} from '../../providers/workout-service/workout-service'
import {Workout} from '../../interfaces/workout';
import {ShowWorkoutPage} from './show-workout/show-workout';


@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
  providers: [AuthGuard,HomePage]
})
export class WorkoutPage {
  workout: Workout[];
  errorMessage: string;

  constructor(public navCtrl: NavController,public authGuard: AuthGuard, public workoutService: WorkoutService) {

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
    this.workoutService.getWorkouts().subscribe(workout=> this.workout= workout,error=> this.errorMessage = <any>error );
  }

  goToWorkout(workout: Workout): void{
    this.navCtrl.push(ShowWorkoutPage,workout);
  }

}
