import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  childPara: string = '';

  constructor(private activatedRoutes: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((para: Params) => {
      this.childPara = para['uid'];
    });
  }
}
