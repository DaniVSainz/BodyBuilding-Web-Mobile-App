import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthGuard} from '../../guards/auth.guard';
import { HomePage } from '../../pages/home/home';



@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
  providers: [AuthGuard,HomePage]
})
export class WorkoutPage {

  constructor(public navCtrl: NavController,public authGuard: AuthGuard) {

  }

   ionViewCanEnter() {
    this.authGuard.canActivate();
    if(this.authGuard.canActivate()){
    }else{
      this.navCtrl.push(HomePage);
    }
  }

  ionViewDidEnter(){
    this.authGuard.printLoginStatus();
  }
}
