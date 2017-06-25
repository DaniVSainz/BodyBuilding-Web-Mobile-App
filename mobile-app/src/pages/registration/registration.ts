import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  rForm: FormGroup;
  registration:any;
  email: string;
  password: string;
  titleAlert:string = 'This field is required';

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder)
    {
      this.rForm=formBuilder.group({
        'email': [null, Validators.required],
        'password': [null, Validators.compose([Validators.required,Validators.minLength(8)])],
        'validate' : ''
      });

  }

  createRegistration(registration){
    this.email = registration.email;
    this.password = registration.password;
    console.log(registration);
    this.rForm.reset();
  }

}
