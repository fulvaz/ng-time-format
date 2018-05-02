# NgTimeFormat

formating date with angular internal API: DatePipe.

# usage

```javascript
 imports: [
    ...
    NgTimeFormatModule.forRoot(),
  ],
```

```javascript
constructor(private formatService: NgTimeFormatService) {}

  public formatDate() {
    // output: 2018 12 13 15 03 32
    this.timeString = this.formatService.formatDate('2018-12-13 15:03:32', 'yyyy MM dd HH mm ss');
  }
```

# definitions

## formatDate(date: any, format: string): string

date & format: just the same as https://angular.io/api/common/DatePipe, but timezone parameter is ignored.

locale: use LOCALE_ID by default. For more locales,  see chapter i18n.


# i18n

In app.moudle, registry your locale

```
import localeCN from '@angular/common/locales/zh-Hans';
import localeExtra from '@angular/common/locales/extra/zh-Hans';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeCN, 'zh-Hans', localeExtra);
```

to build i18n app dynamically, use `ng build --locale 'your locale code'`

ps: `--locale` will not work in JIT mode.

to work with JIT mode, you need to add provider manully.

```
{provide: LOCALE_ID, useValue: 'your locale code'},
```

for more locale codes, see https://unpkg.com/@angular/common@5.2.10/locales/

# demo

git clone this project, and

```
  npm run start
```
