/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditParlourComponent } from './edit-parlour.component';

describe('EditParlourComponent', () => {
  let component: EditParlourComponent;
  let fixture: ComponentFixture<EditParlourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditParlourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParlourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
