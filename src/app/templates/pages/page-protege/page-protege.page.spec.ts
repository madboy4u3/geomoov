import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProtegePage } from './page-protege.page';

describe('PageProtegePage', () => {
  let component: PageProtegePage;
  let fixture: ComponentFixture<PageProtegePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProtegePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProtegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
