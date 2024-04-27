import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {environment} from './environments/environment';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
if (environment) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule)]
}).catch(err => console.error(err));
