import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetTemplatesPage } from './get-templates';

@NgModule({
  declarations: [
    GetTemplatesPage,
  ],
  imports: [
    IonicPageModule.forChild(GetTemplatesPage),
  ],
  exports: [
    GetTemplatesPage
  ]
})
export class GetTemplatesPageModule {}
