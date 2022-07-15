import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgAssignment1Component } from './ng-assignment1/ng-assignment1.component';
import { NgAssignment2Component } from './ng-assignment2/ng-assignment2.component';
import { NgAssignment3Component } from './ng-assignment3/ng-assignment3.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { NgAssignment4Component } from './ng-assignment4/ng-assignment4.component';

@NgModule({
  declarations: [AppComponent, NgAssignment1Component, NgAssignment2Component, NgAssignment3Component, EmployeeLeaveComponent, NgAssignment4Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
