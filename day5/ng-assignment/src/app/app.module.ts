import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgAssignment1Component } from './ng-assignment1/ng-assignment1.component';
import { NgAssignment2Component } from './ng-assignment2/ng-assignment2.component';

@NgModule({
  declarations: [AppComponent, NgAssignment1Component, NgAssignment2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
