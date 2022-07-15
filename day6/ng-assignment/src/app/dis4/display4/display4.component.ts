import { Data3Service } from './../../data3.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display4',
  templateUrl: './display4.component.html',
  styleUrls: ['./display4.component.css'],
})
export class Display4Component implements OnInit {
  privatemod2: string = '';
  constructor(private data3: Data3Service) {}

  ngOnInit(): void {
    const Result3 = this.data3.msgNotify();
    this.privatemod2 = Result3;
  }
}
