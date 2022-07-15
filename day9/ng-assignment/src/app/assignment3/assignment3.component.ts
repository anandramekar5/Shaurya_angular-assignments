import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component implements OnInit {
  adminarr = [
    { userid: 1, username: 'admin 1', userstatus: 'A' },
    { userid: 2, username: 'admin 2', userstatus: 'D' },
    { userid: 3, username: 'admin 3', userstatus: 'A' },
    { userid: 4, username: 'admin 4', userstatus: 'A' },
    { userid: 5, username: 'admin 5', userstatus: 'D' },
    { userid: 6, username: 'admin 6', userstatus: 'D' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
