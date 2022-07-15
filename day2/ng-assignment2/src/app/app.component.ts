import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-assignment2';
  box: string = 'Hide Box';
  showbox: boolean = true;

  toggle() {
    // if (this.showbox === true) {
    //   this.showbox = false;
    // } else {
    //   this.showbox = true;
    // }

    this.showbox = !this.showbox;
  }
}
