import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";


import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import { WorkoutComponent } from './workout/workout.component';
import { NewWorkoutComponent } from './workout/new-workout/new-workout.component';
import { ShowWorkoutComponent } from './workout/show-workout/show-workout.component';
import { TimerComponent } from './timer/timer.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
    {
    path: 'workout',
    component: WorkoutComponent,
    canActivate: [AuthGuard]
  },
      {
    path: 'new-workout',
    component: NewWorkoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'show-workout/:id',
    component: ShowWorkoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'apptimer',
    component: TimerComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
