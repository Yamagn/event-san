import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

/*
  Generated class for the BookmarkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookmarkProvider {

  constructor(public storage: Storage) {
    console.log('Hello BookmarkProvider Provider');
  }

  get() {
    return this.storage.get("bookmark.events").then(events => {
      return events ? events : {};
    });
  }

  put(event: any) {
    return this.get().then(events => {
      events[event.event_id] = event;
      return this.storage.set("bookmark.events", events);
    })
  }

  delete(event: any) {
    return this.get().then(events => {
      delete events[event.event_id];
      return this.storage.set("bookmark.events", events);
    })
  }
}
