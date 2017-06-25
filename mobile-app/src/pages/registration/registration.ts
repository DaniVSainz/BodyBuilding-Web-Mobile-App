import { Component,EventEmitter, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import {AuthService} from '../../providers/auth-service/auth-service';
import {HomePage} from '../home/home';

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
  passwordConfirmation: string;

  @Output() onFormResult = new EventEmitter<any>();


  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder,private authService:AuthService)
    {
      this.rForm=formBuilder.group({
        'email': [null, Validators.compose([Validators.required,Validators.email])],
        'password': [null, Validators.compose([Validators.required,Validators.minLength(8)])],
        'passwordConfirmation':['',Validators.compose([Validators.minLength(8),Validators.required])]
      }, {validator: matchingPasswords('password', 'passwordConfirmation')});

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
    // this.email = registration.email;
    // this.password = registration.password;
    // this.passwordConfirmation = registration.passwordConfirmation
    console.log(registration);
    this.authService.registerUser(registration).subscribe(
        (res) => {

          if (res.status == 200){
            this.onFormResult.emit({signedUp: true, res})
            this.rForm.reset();
            this.navCtrl.pop
            this.navCtrl.push(HomePage);
          }

        },
        (err) => {
          console.log(err.json())
          this.onFormResult.emit({signedUp: false, err})
        }
    )
  }

}
