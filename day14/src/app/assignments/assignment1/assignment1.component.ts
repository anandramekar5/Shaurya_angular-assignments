import { Service1Service } from 'src/app/services/service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css'],
})
export class Assignment1Component implements OnInit {
  empDisplay: any = [];
  constructor(private empdata: Service1Service) {
    this.empdata.getData().subscribe((empInfo) => {
      console.log(empInfo);
      this.empDisplay = empInfo;
    });
  }

  onFormSubmit(pushdata: any) {
    this.empdata.postData(pushdata).subscribe((pushInfo) => {
      console.warn(pushdata);
      console.log(pushInfo);
    });
  }
  ngOnInit(): void {}
}
