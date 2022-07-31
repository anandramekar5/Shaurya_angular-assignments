import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userdata: any = [
    { id: 'user101', password: '101@user', status: 'Active' },
    { id: 'user102', password: '102@user', status: 'Active' },
    { id: 'user103', password: '103@user', status: 'Inactive' },
    { id: 'user104', password: '104@user', status: 'Active' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
