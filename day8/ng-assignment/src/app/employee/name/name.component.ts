import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent implements OnInit {
  users: any;
  constructor(private user: DataService) {
    console.warn(user.getData());
    this.users = user.getData();
  }

  ngOnInit(): void {}
}
