import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccueilPage } from './page-accueil.page';

describe('PageAccueilPage', () => {
  let component: PageAccueilPage;
  let fixture: ComponentFixture<PageAccueilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAccueilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAccueilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
