import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import {Angular2TokenService} from "angular2-token";
import {LoginPage} from '../login/login';
// import {WorkoutPage} from '../workout/workout';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // private workoutPage;
  // private loginPage;
  // private rootPage;


  constructor(public navCtrl: NavController,private authService: AuthService,public authTokenService:Angular2TokenService) {
    // this.rootPage = LoginPage;
    // this.workoutPage = WorkoutPage;
    // this.loginPage = LoginPage;
  }


  // openPage(p) {
  //   this.rootPage = p;
  // }

}
