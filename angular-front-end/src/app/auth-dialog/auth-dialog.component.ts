import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.sass']
})
export class AuthDialogComponent implements OnInit {

  @Input('auth-mode') authMode: 'login' | 'register' = 'login';
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() {

  }

  openDialog(mode: 'login' | 'register' = 'login'){
    this.authMode = mode;
    this.modalActions.emit({action:"modal", params:['open']});
  }

  ngOnInit() {
  }

  isLoginMode(){return this.authMode == 'login'}
  isRegisterMode(){return this.authMode == 'register'}


}
