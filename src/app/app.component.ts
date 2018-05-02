import { Component } from '@angular/core';
import { NgTimeFormatService } from '../lib/ng-time-format.service';
import * as addDays from 'date-fns/add_days';
// import {addDays} from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  date = '';

  format = 'yyyy-MM-dd-EEEE';

  timeString = '';

  today = new Date();

  constructor(private local: NgTimeFormatService) {}

  public formatDate() {
    this.timeString = this.local.formatDate(this.date, this.format);
  }

  public addADay() {
    this.today = addDays(this.today, 1);
  }
}
