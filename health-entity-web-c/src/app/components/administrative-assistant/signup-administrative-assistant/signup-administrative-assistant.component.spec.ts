import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAdministrativeAssistantComponent } from './signup-administrative-assistant.component';

describe('SignupAdministrativeAssistantComponent', () => {
  let component: SignupAdministrativeAssistantComponent;
  let fixture: ComponentFixture<SignupAdministrativeAssistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAdministrativeAssistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAdministrativeAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
