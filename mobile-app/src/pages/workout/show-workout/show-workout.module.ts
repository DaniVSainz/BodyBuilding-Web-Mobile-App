import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowWorkoutPage } from './show-workout';

@NgModule({
  declarations: [
    ShowWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowWorkoutPage),
  ],
  exports: [
    ShowWorkoutPage
  ]
})
export class ShowWorkoutPageModule {}
