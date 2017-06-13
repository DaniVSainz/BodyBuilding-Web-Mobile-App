import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import {Angular2TokenService} from "angular2-token";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private authService: AuthService,public authTokenService:Angular2TokenService) {

  }

}
