import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupeComponent } from './form-parcours.component';

describe('FormGroupeComponent', () => {
  let component: FormGroupeComponent;
  let fixture: ComponentFixture<FormGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
