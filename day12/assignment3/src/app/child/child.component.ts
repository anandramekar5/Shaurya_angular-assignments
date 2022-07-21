import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  selectedUserId: number = 0;

  userList: any = [
    {
      userid: 'admin1',
      username: 'Robert jr',
      status: 'Active',
      role: 'Full Stack Developer',
    },
    {
      userid: 'admin2',
      username: 'Chris Evans',
      status: 'Active',
      role: 'Manager',
    },
    {
      userid: 'admin3',
      username: 'Beneddict Cumber',
      status: 'InActive',
      role: 'Full Stack Developer',
    },
    {
      userid: 'admin4',
      username: 'Christen Stewert',
      status: 'Active',
      role: 'Admin',
    },
    {
      userid: 'admin5',
      username: 'Dev Patel',
      status: 'Active',
      role: 'Full Stack Developer',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  displayDetails(selectId: number) {
    this.selectedUserId = selectId;
  }
}
