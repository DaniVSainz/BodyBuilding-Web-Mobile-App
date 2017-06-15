import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciseShowPage } from './exercise-show';

@NgModule({
  declarations: [
    ExerciseShowPage,
  ],
  imports: [
    IonicPageModule.forChild(ExerciseShowPage),
  ],
  exports: [
    ExerciseShowPage
  ]
})
export class ExerciseShowPageModule {}
