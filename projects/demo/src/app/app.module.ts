import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgRatingProModule } from 'ng-rating-pro';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgRatingProModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
