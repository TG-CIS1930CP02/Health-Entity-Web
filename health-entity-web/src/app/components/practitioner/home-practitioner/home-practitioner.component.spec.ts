import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePractitionerComponent } from './home-practitioner.component';

describe('HomePractitionerComponent', () => {
  let component: HomePractitionerComponent;
  let fixture: ComponentFixture<HomePractitionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
