import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent3Component } from './search-box-component-3.component';

describe('SearchBoxComponent3Component', () => {
  let component: SearchBoxComponent3Component;
  let fixture: ComponentFixture<SearchBoxComponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxComponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
