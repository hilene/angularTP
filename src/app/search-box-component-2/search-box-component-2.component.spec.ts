import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent2Component } from './search-box-component-2.component';

describe('SearchBoxComponent2Component', () => {
  let component: SearchBoxComponent2Component;
  let fixture: ComponentFixture<SearchBoxComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
