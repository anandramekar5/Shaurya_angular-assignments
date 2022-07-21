import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment1';
  rstatus: any = '';

  onSubmit(formsubmit: any) {
    console.log(formsubmit.value);
    console.log(formsubmit.status);

    this.rstatus = formsubmit.status;
  }
}
