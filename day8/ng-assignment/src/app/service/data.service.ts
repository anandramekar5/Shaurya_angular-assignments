import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData() {
    return [
      { name: 'Anand Ramekar', email: 'anand@email.com' },
      { name: 'Abhijeet Dongare', email: 'abhi@email.com' },
      { name: 'Chenku Balaji', email: 'chenku@email.com' },
    ];
  }
}
