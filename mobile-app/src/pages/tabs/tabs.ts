import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { WorkoutPage } from '../workout/workout';
import { HomePage } from '../home/home';
import {AuthGuard} from '../../guards/auth.guard';
import {AuthService} from '../../providers/auth-service/auth-service';

@Component({
  templateUrl: 'tabs.html',
  providers: [AuthService]
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = WorkoutPage;
  tab4Root = HomePage

  constructor(public authGuard:AuthGuard,
              public authService: AuthService) {
  }

  isUserLoggedIn(){
    this.authGuard.canActivate();
  }

  logUserOut(){
    this.authService.logOutUser();
    console.log("Sup mom, im not logging out")
  }
}
