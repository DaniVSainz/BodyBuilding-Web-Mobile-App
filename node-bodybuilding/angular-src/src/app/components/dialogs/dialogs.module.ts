import { DialogsService } from './dialog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [AuthDialogComponent],
  exports: [AuthDialogComponent],
  entryComponents: [AuthDialogComponent],
  providers: [DialogsService]
})
export class DialogsModule { }