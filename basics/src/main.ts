import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
platformBrowserDynamic()
  .bootstrapModule(AppModule)//Iniciating the app on the browser, returns a promise
  .catch(err => console.error(err));

