import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsComponent } from './buttons';

@NgModule({
  declarations: [
    ButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsComponent),
  ],
  exports: [
    ButtonsComponent
  ]
})
export class ButtonsComponentModule {}
