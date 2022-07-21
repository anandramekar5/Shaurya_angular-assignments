import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css'],
})
export class Display2Component implements OnInit {
  frmUser: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.frmUser = this.formBuilder.group({
      username: '',
      roleassign: this.formBuilder.array([]),
    });
  }

  get roleassign(): FormArray {
    return this.frmUser.get('roleassign') as FormArray;
  }

  newRole(): FormGroup {
    return this.formBuilder.group({
      role: '',
    });
  }
  addRole() {
    this.roleassign.push(this.newRole());
  }
  removeRole(i: number) {
    this.roleassign.removeAt(i);
  }
  onSubmit() {
    console.log(this.frmUser.value);
  }
}
