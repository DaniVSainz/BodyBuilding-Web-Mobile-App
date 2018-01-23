import { ExerciseShowComponent } from './workout/exercise-show/exercise-show.component';
import { ShowWorkoutComponent } from './workout/show-workout/show-workout.component';
import { WorkoutService } from './services/workout.service';
import { DialogsModule } from './components/dialogs/dialogs.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { WorkoutComponent } from './workout/workout.component';
import { NewWorkoutComponent } from './workout/new-workout/new-workout.component';





const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'workout', component: WorkoutComponent, canActivate:[AuthGuard]},
  {path: 'new-workout', component: NewWorkoutComponent,canActivate: [AuthGuard]},
  {path: 'show-workout/:id',component: ShowWorkoutComponent,canActivate: [AuthGuard]},
  {path: 'show-exercise/:id',component: ExerciseShowComponent,canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    WorkoutComponent,
    NewWorkoutComponent,
    ShowWorkoutComponent,
    ExerciseShowComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    DialogsModule,


  ],

  providers: [ValidateService, AuthService, AuthGuard,WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
