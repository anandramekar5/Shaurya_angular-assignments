import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @Output() productEventUpdate = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(formProduct: any) {
    // console.log(formProduct.value);

    this.productEventUpdate.emit(formProduct.value);
  }
}
