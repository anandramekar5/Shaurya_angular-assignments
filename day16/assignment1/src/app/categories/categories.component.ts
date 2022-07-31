import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categorydata: any = [
    { id: '101', name: 'dell', status: 'Active', price: 78500 },
    { id: '102', name: 'hp', status: 'Inactive', price: 87500 },
    { id: '103', name: 'sony', status: 'Active', price: 56500 },
    { id: '104', name: 'ibm', status: 'Active', price: 24100 },
    { id: '105', name: 'hcl', status: 'Inactive', price: 98700 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
