import { Injectable } from '@angular/core';
import { EmployeesModule } from './employees/employees.module';

@Injectable({
  providedIn: EmployeesModule,
})
export class Data2Service {
  constructor() {}

  fn1() {
    return 'fn1 gets called from serveice data2';
  }
}
