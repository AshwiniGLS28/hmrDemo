import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UpdateButtonComponentComponent } from './update-button-component/update-button-component.component';
import { environment } from 'src/environments/environment';


@NgModule({
  imports:      [ BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (whichever comes first).
  })],
  declarations: [ AppComponent, UpdateButtonComponentComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }

