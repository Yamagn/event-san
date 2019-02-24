import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, ToastController } from 'ionic-angular';
import { BookmarkProvider } from "../../providers/bookmark/bookmark";

@IonicPage()
@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
})
export class BookmarkPage {

  events: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public  bookmarkProvider: BookmarkProvider
  ) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter BookmarkPage');
    this.bookmarkProvider.get().then(events => {
      this.events = this.toEventArray(events);
    });
  }

  private toEventArray(events): Array<any> {
    const eventArray = [];
    Object.keys(events).forEach(key => {
      eventArray.push(events[key]);
    })
    eventArray.sort((ev1, ev2) => {
      let ret = ev2.started_at.localeCompare(ev1.started_at);
      if (ret !== 0) return ret;
      return ev2.event_id - ev1.event_id;
    })
    return eventArray
  }

  openEvent(event) {
    this.navCtrl.push('EventDetailPage', {
      eventId: event.event_id,
      event: event
    });
  }

  doDelete(event:any, itemSliding: ItemSliding) {
    this.bookmarkProvider.delete(event).then(events => {
      this.events = this.toEventArray(events);
      const toast = this.toastCtrl.create({
        message: 'ブックマークを削除しました。',
        duration: 1500
      });
      toast.present();
    })
    itemSliding.close()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarkPage');
  }

}
