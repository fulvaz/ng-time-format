import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgTimeFormatService } from './ng-time-format.service';

@NgModule({
  imports: [
  ],
  providers: [
    DatePipe,

  ]
})
export class NgTimeFormatModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgTimeFormatModule,
      providers: [
        NgTimeFormatService,
      ],
    };
  }
}
