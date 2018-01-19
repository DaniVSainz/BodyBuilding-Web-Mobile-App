import { DialogsService } from './dialog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [AuthDialogComponent],
  exports: [AuthDialogComponent],
  entryComponents: [AuthDialogComponent],
  providers: [DialogsService]
})
export class DialogsModule { }