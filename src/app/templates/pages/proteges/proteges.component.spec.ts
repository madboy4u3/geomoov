import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtegesComponent } from './proteges.component';

describe('ProtegesComponent', () => {
  let component: ProtegesComponent;
  let fixture: ComponentFixture<ProtegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtegesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
