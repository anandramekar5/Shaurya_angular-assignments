import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAssignment2Component } from './ng-assignment2.component';

describe('NgAssignment2Component', () => {
  let component: NgAssignment2Component;
  let fixture: ComponentFixture<NgAssignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAssignment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAssignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
