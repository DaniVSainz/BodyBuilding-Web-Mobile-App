import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';
import {AuthGuard} from "./guards/auth.guard";

import {AuthService} from "./services/auth.service";
import { WorkoutService} from './services/workout.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkoutComponent } from './workout/workout.component';
import { NewWorkoutComponent } from './workout/new-workout/new-workout.component';
import { ShowWorkoutComponent } from './workout/show-workout/show-workout.component';
import { ExerciseShowComponent } from './workout/exercise-show/exercise-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    WorkoutComponent,
    NewWorkoutComponent,
    ShowWorkoutComponent,
    ExerciseShowComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [ Angular2TokenService,AuthService, AuthGuard, WorkoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
