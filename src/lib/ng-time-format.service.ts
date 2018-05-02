import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class NgTimeFormatService {

  constructor(private datePipe: DatePipe, @Inject(LOCALE_ID) private locale: string) {
  }

  formatDate(date: any, format: string, locale = this.locale): string {
    console.log(locale);
    return this.datePipe.transform(date, format);
  }
}
