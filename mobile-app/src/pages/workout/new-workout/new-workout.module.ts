import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewWorkoutPage } from './new-workout';

@NgModule({
  declarations: [
    NewWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(NewWorkoutPage),
  ],
  exports: [
    NewWorkoutPage
  ]
})
export class NewWorkoutPageModule {}
