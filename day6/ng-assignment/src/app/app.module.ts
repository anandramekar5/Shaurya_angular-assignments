import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './dis1/display1/display1.component';
import { Display2Component } from './dis2/display2/display2.component';
import { Display3Component } from './dis3/display3/display3.component';
import { Display4Component } from './dis4/display4/display4.component';

const appRoutes: Routes = [
  { path: '', component: Display1Component },
  { path: 'display2', component: Display2Component },
  { path: 'display3', component: Display3Component },
  { path: 'display4', component: Display4Component },
];
@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    Display2Component,
    Display3Component,
    Display4Component,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
