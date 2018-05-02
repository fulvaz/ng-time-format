import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgTimeFormatModule } from 'ng-time-format';
import localeCN from '@angular/common/locales/zh-Hans';
import localeExtra from '@angular/common/locales/extra/zh-Hans';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeCN, 'zh-Hans', localeExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTimeFormatModule.forRoot(),
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
