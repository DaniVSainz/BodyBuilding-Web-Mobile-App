import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowTemplatePage } from './show-template';

@NgModule({
  declarations: [
    ShowTemplatePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowTemplatePage),
  ],
  exports: [
    ShowTemplatePage
  ]
})
export class ShowTemplatePageModule {}
