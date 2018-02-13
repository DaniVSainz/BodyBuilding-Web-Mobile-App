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

  // onSignInSubmit(){

  //   this.authService.authenticateUser(this.signInUser).subscribe(
  //       res => {
  //         console.log(res);
  //         if(res.success == true){
  //           this.onFormResult.emit({signedIn: true, res});
  //           window.location.reload();
  //           }
  //       },
  //       err => {
  //         console.log('err:', err);
  //         this.onFormResult.emit({signedIn: false, err});
  //       }

  //   );
  // }

  onSignInSubmit(){

    this.authService.authenticateUser(this.signInUser).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.onFormResult.emit({signedIn: true, data});
        window.location.reload();
      } else {
        console.log('error');
        // this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        // this.router.navigate(['login']);
      }
  });
  }

  logUserOut(){
    this.authService.logout();
    console.log("Sup mom, im not logging out")
    window.location.reload();
  }

  signUp(){
    this.navCtrl.push(RegistrationPage);
  }

}

