import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExerciseSet} from '../../../interfaces/exercise_set';

/**
 * Generated class for the ExerciseShowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-exercise-show',
  templateUrl: 'exercise-show.html',
})
export class ExerciseShowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
