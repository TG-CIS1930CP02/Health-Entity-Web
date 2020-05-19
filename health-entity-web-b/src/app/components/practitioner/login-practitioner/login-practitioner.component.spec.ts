import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPractitionerComponent } from './login-practitioner.component';

describe('LoginPractitionerComponent', () => {
  let component: LoginPractitionerComponent;
  let fixture: ComponentFixture<LoginPractitionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
