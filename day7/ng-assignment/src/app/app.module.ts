import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './assignment1/display1/display1.component';
import { Display2Component } from './assignment2/display2/display2.component';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    Display2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
