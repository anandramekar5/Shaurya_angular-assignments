import { Component, OnInit } from '@angular/core';
import { Contacts } from '../data1.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  msg1: any = '';
  msg2: any = '';
  msg3: any = '';
  msg4: any = '';
  constructor() {}

  ngOnInit(): void {
    const data1 = new Contacts.AddNewContact();
    data1.display1();
    this.msg1 = data1.display1();

    const data2 = new Contacts.EditContact();
    data2.display2();
    this.msg2 = data2.display2();

    const data3 = new Contacts.DeleteContact();
    data3.display3();
    this.msg3 = data3.display3();

    const data4 = new Contacts.ListContact();
    data4.display4();
    this.msg4 = data4.display4();
  }
}
