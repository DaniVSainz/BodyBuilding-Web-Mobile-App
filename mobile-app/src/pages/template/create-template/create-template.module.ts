import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTemplatePage } from './create-template';

@NgModule({
  declarations: [
    CreateTemplatePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTemplatePage),
  ],
  exports: [
    CreateTemplatePage
  ]
})
export class CreateTemplatePageModule {}
