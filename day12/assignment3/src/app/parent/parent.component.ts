import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @Input('propAdmin') AdminData: any;
  constructor() {}

  ngOnInit(): void {}
}
