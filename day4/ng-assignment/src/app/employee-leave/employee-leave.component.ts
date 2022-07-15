import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.css'],
})
export class EmployeeLeaveComponent implements OnInit {
  @Input() leavable: any;
  constructor() {}

  ngOnInit(): void {}
}
