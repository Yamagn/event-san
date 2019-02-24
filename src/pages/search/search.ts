import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { EventProvider } from "../../providers/event/event";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  keywords: string = "";
  events: any[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public eventProvider: EventProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getEvents(ev) {
    const searchKeywords: string = this.keywords.trim();

    if (!searchKeywords) return;
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    const kwds = searchKeywords.split(' ').filter(v => v !== "");
    this.eventProvider.search(kwds).subscribe((body: any) => {
      if (body && body.events) {
        if (this.keywords === searchKeywords) {
          this.events = body.events;
        }
      }
      loader.dismiss();
    }, (error: any) => {
      loader.dismiss();
    })
  }

  openEvent(event) {
    this.navCtrl.push('EventDetailPage', {
      eventId: event.event_id,
      event: event
    });
  }

}
