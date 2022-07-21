import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-assignment';

  loginForm = new FormGroup({
    id: new FormControl('12345', [
      Validators.required,
      Validators.minLength(6),
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
  });

  userLogin() {
    console.log(this.loginForm.value);
  }

  get f() {
    return this.loginForm.controls;
  }
}
