import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent{
  public title: string = "Hello";
  public message: string;

  constructor(public dialogRef: MatDialogRef<AuthDialogComponent>) {
  }
  
}
