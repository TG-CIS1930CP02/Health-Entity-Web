import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministrativeAssistantComponent } from './home-administrative-assistant.component';

describe('HomeAdministrativeAssistantComponent', () => {
  let component: HomeAdministrativeAssistantComponent;
  let fixture: ComponentFixture<HomeAdministrativeAssistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministrativeAssistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministrativeAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
