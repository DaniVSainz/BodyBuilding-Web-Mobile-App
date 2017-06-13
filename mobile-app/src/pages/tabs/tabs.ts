import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { WorkoutPage } from '../workout/workout';
import { HomePage } from '../home/home';
import {AuthGuard} from '../../guards/auth.guard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = WorkoutPage;

  constructor(public authGuard:AuthGuard) {
  }

  isUserLoggedIn(){
    this.authGuard.canActivate();
  }
}
