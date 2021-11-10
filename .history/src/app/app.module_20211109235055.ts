import { PipeCustomModule } from './shared/pipes/pipe-custom.module';
import { httpInterceptorProviders } from './core/interceptors/index';
import { BASE_URL } from './core/interceptors/base-url-interceptor';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** Font Awesome */
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab)

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    PipeCustomModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: BASE_URL, useValue: environment.baseUrl },
    httpInterceptorProviders,

  ],
  bootstrap: [AppComponent],
  exports: [
  ],

})
export class AppModule {
	constructor(library: FaIconLibrary) {
		library.addIconPacks(fas, fab, far);
	}

}
