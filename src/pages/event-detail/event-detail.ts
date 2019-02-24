import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EventProvider } from "../../providers/event/event";
import { BookmarkProvider } from "../../providers/bookmark/bookmark";

/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'event-detail/:eventId'
})
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  event: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public  eventProvider: EventProvider,
              public  toastCtrl: ToastController,
              public bookmarkProvider: BookmarkProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
    this.event = this.navParams.data.event;
    if (!this.event) {
      this.eventProvider.get(this.navParams.data.eventId).subscribe((body: any) => {
        if (body && body.events && body.events.length() > 0) this.event = body.events[0];
      });
    }
  }

  doBookmark() {
    this.bookmarkProvider.put(this.event).then(() => {
      const toast = this.toastCtrl.create({
        message: 'イベントをブックマークしました。',
        duration: 1500
      });
      toast.present();
    })
  }

}
