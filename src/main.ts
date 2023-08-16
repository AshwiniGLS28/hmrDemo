import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment.prod';

if (!environment.production) {
  enableProdMode();
  
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator) {
    // navigator.serviceWorker.register('hmr-demo/ngsw-worker.js')
    //   .then(registration => {
    //     console.log('Service Worker registered with scope:', registration.scope);
    //   })
    //   .catch(error => {
    //     console.error('Service Worker registration failed:', error);
    //   });

    navigator.serviceWorker.register('ngsw-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
  }
}).catch(err => console.log(err));
