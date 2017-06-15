import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { WorkoutPage } from '../pages/workout/workout';
import { HomePage } from '../pages/home/home';
import {ShowWorkoutPage} from '../pages/workout/show-workout/show-workout';
import {ExerciseShowPage} from '../pages/workout/exercise-show/exercise-show';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { Angular2TokenService } from 'angular2-token';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {AuthGuard} from "../guards/auth.guard";
import { WorkoutService } from '../providers/workout-service/workout-service';





@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    WorkoutPage,
    HomePage,
    ShowWorkoutPage,
    ExerciseShowPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    WorkoutPage,
    HomePage,
    ShowWorkoutPage,
    ExerciseShowPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Angular2TokenService,
    AuthGuard,
    WorkoutService

  ]
})
export class AppModule {}
