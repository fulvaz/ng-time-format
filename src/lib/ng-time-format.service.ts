import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class NgTimeFormatService {

  constructor(private datePipe: DatePipe) {
  }

  formatDate(date: any, format: string): string {
    return this.datePipe.transform(date, format);
  }
}
