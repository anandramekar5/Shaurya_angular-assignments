import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css'],
})
export class Assignment1Component implements OnInit {
  title = 'Angular Reactive Form';

  loginForm = new FormGroup({
    userid: new FormControl(''),
    username: new FormControl(''),
    address: new FormControl(''),
    pincode: new FormControl(''),
  });

  loginUser() {
    console.warn(this.loginForm.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
