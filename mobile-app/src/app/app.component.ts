import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../enviroments/enviroment";
import {HomePage} from '../pages/home/home';
import {ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthGuard} from '../guards/auth.guard';


import {LoginPage} from "../pages/login/login";
import{WorkoutPage} from '../pages/workout/workout';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  // loggedIn:boolean =false;


  @ViewChild('mycontent') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar,
               splashScreen: SplashScreen,
               private authToken: Angular2TokenService,
               private authGuard: AuthGuard
              ) {
    this.authToken.init(environment.token_auth_config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // ionViewCanEnter(){
  //   this.loggedIn = this.isUserLoggedIn();
  // }

  isUserLoggedIn(){
    return this.authGuard.canActivate();
  }

  goToPage(){
    this.nav.push(WorkoutPage);
  }

  goToLogin(){
    this.nav.push(LoginPage);
  }
}



