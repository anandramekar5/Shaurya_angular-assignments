import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WebsitedesignComponent } from './websitedesign/websitedesign.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WebsitedesignComponent,
    WebdevelopmentComponent,
    MobileappComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
