import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private authService:AuthService,public navCtrl: NavController) {}

  ngOnInit() {}

  onSignInSubmit(){

    this.authService.logInUser(this.signInUser).subscribe(
        res => {
          if(res.status == 200){
            this.onFormResult.emit({signedIn: true, res});
            location.reload();

            }
        },
        err => {
          console.log('err:', err);
          this.onFormResult.emit({signedIn: false, err});
        }

    );

  }

}

