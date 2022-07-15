import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAssignment1Component } from './ng-assignment1.component';

describe('NgAssignment1Component', () => {
  let component: NgAssignment1Component;
  let fixture: ComponentFixture<NgAssignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAssignment1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAssignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
