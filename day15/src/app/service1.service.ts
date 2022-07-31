import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Service1Service {
  constructor(private http: HttpClient) {}

  url: any = 'http://localhost:3000/employee';

  getData() {
    return this.http.get(this.url);
  }

  deleteEmployeeData(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
