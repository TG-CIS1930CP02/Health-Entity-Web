import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuthorizationComponent } from './list-authorization.component';

describe('ListAuthorizationComponent', () => {
  let component: ListAuthorizationComponent;
  let fixture: ComponentFixture<ListAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
