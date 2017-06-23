import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { WorkoutPage } from '../pages/workout/workout';
import {ShowWorkoutPage} from '../pages/workout/show-workout/show-workout';
import {ExerciseShowPage} from '../pages/workout/exercise-show/exercise-show';
import {NewWorkoutPage} from '../pages/workout/new-workout/new-workout';

import {CreateTemplatePage} from '../pages/template/create-template/create-template'
import {GetTemplatesPage} from '../pages/template/get-templates/get-templates';
import {ShowTemplatePage} from '../pages/template/show-template/show-template';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { Angular2TokenService } from 'angular2-token';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {AuthGuard} from "../guards/auth.guard";
import { WorkoutService } from '../providers/workout-service/workout-service';
import { TimerServiceProvider } from '../providers/timer-service/timer-service';
import { TimerComponent } from '../components/timer/timer';
import { ButtonsComponent } from '../components/buttons/buttons';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    WorkoutPage,
    HomePage,
    ShowWorkoutPage,
    ExerciseShowPage,
    TimerComponent,
    ButtonsComponent,
    NewWorkoutPage,
    CreateTemplatePage,
    GetTemplatesPage,
    ShowTemplatePage

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
    ExerciseShowPage,
    NewWorkoutPage,
    CreateTemplatePage,
    GetTemplatesPage,
    ShowTemplatePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Angular2TokenService,
    AuthGuard,
    WorkoutService,
    TimerServiceProvider

  ]
})
export class AppModule {}
