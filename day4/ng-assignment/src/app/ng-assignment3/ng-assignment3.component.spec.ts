import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAssignment3Component } from './ng-assignment3.component';

describe('NgAssignment3Component', () => {
  let component: NgAssignment3Component;
  let fixture: ComponentFixture<NgAssignment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAssignment3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAssignment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
