import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAssignment4Component } from './ng-assignment4.component';

describe('NgAssignment4Component', () => {
  let component: NgAssignment4Component;
  let fixture: ComponentFixture<NgAssignment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAssignment4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAssignment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
