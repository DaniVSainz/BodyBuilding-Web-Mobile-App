import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";


import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import { WorkoutComponent } from './workout/workout.component';
import { NewWorkoutComponent } from './new-workout/new-workout.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
