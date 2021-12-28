import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LaunchScheduleComponent } from './launch-schedule/launch-schedule.component';
import { ApiModule, Configuration } from 'launch-library-client';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LaunchScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ApiModule.forRoot(() => new Configuration({
      basePath: environment.launchLibraryApiUrl
    }))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
