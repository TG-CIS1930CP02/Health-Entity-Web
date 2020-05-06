import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministratorComponent } from './home-administrator.component';

describe('HomeAdministratorComponent', () => {
  let component: HomeAdministratorComponent;
  let fixture: ComponentFixture<HomeAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
