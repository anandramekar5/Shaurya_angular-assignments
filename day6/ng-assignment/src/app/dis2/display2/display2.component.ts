import { Data1Service } from './../../data1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css'],
})
export class Display2Component implements OnInit {
  publicModi2: string = '';
  constructor(private data1: Data1Service) {}

  ngOnInit(): void {
    const Result = this.data1.publicMod;
    this.publicModi2 = Result;
  }
}
