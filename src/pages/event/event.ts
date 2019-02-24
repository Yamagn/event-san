import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the EventPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {

  searchRoot = 'SearchPage'
  bookmarkRoot = 'BookmarkPage'


  constructor(public navCtrl: NavController) {}

}
