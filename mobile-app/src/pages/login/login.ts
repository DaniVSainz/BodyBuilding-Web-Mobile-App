import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../providers/auth-service/auth-service';
import {AuthGuard} from '../../guards/auth.guard';
import {RegistrationPage} from '../registration/registration';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private authService:AuthService,public navCtrl: NavController,private authGuard: AuthGuard) {}

  ngOnInit() {}

  isUserLoggedIn(){
    this.authGuard.canActivate();
  }

  onSignInSubmit(){

    this.authService.logInUser(this.signInUser).subscribe(
        res => {
          if(res.status == 200){
            this.onFormResult.emit({signedIn: true, res});
            window.location.reload();
            }
        },
        err => {
          console.log('err:', err);
          this.onFormResult.emit({signedIn: false, err});
        }

    );
  }

  logUserOut(){
    this.authService.logOutUser();
    console.log("Sup mom, im not logging out")
    window.location.reload();
  }

  signUp(){
    this.navCtrl.push(RegistrationPage);
  }

}

