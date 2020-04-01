import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPractitionerComponent } from './signup-practitioner.component';

describe('SignupPractitionerComponent', () => {
  let component: SignupPractitionerComponent;
  let fixture: ComponentFixture<SignupPractitionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
