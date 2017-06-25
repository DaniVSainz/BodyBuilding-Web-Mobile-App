import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';


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
  passwordMatch: '';

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder)
    {
      this.rForm=formBuilder.group({
        'email': [null, Validators.compose([Validators.required,Validators.email])],
        'password': [null, Validators.compose([Validators.required,Validators.minLength(8)])],
        'confirmPassword':['',Validators.compose([Validators.minLength(8),Validators.required])]
      }, {validator: matchingPasswords('password', 'confirmPassword')});

        function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): {[key: string]: any} => {
          let password = group.controls[passwordKey];
          let confirmPassword = group.controls[confirmPasswordKey];

          if (password.value !== confirmPassword.value) {
            return {
              mismatchedPasswords: true
            };
          }
        }
      }
    }




  createRegistration(registration){
    this.email = registration.email;
    this.password = registration.password;
    console.log(registration);
    this.rForm.reset();
  }

}
