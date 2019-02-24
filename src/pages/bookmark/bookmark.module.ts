import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookmarkPage } from './bookmark';

@NgModule({
  declarations: [
    BookmarkPage,
  ],
  imports: [
    IonicPageModule.forChild(BookmarkPage),
  ],
})
export class BookmarkPageModule {}
