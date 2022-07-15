import { Display2Component } from './assignment2/display2/display2.component';
import { Display1Component } from './assignment1/display1/display1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'display1', component: Display1Component },
  { path: 'display2', component: Display2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
