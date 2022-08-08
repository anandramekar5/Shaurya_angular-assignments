import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url: any = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {}

  pushData(data: any) {
    return this.http.post(this.url, data);
  }

  getData() {
    return this.http.get(this.url);
  }
}
