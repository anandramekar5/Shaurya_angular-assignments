import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/userservice/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitted: boolean = false;
  userData: any = [];
  constructor(private userdata: RegisterService) {
    this.userdata.getData().subscribe((res) => {
      this.userData = res;
    });
  }

  ngOnInit(): void {}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(12),
      Validators.minLength(10),
      Validators.pattern('^[0-9]*$'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z0-9d@$!%*#?&]{8,14}$'
      ),
    ]),
    confirmPassword: new FormControl('', Validators.required),
  });

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    // console.warn(this.registerForm.value);
    this.userdata.pushData(this.registerForm.value).subscribe((result) => {
      console.warn(result);
      this.registerForm.reset();
    });

    // alert(
    //   'SUCCESS!! :-)\n\n' +
    //     JSON.stringify(this.registerForm.controls['name'].value)
    // );
  }
}
