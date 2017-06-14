import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../enviroments/enviroment";
import {HomePage} from '../pages/home/home';
import {ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';



import{WorkoutPage} from '../pages/workout/workout';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild('mycontent') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private authToken: Angular2TokenService) {
    this.authToken.init(environment.token_auth_config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(){
    this.nav.push(WorkoutPage);
  }
}



