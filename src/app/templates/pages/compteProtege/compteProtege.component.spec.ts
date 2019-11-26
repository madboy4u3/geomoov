import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteProtegeComponent } from './compteProtege.component';

describe('CompteProtegeComponent', () => {
  let component: CompteProtegeComponent;
  let fixture: ComponentFixture<CompteProtegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompteProtegeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteProtegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
