import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  usermails: any;
  constructor(private mail: DataService) {
    console.log(mail.getData());
    this.usermails = mail.getData();
  }

  ngOnInit(): void {}
}
