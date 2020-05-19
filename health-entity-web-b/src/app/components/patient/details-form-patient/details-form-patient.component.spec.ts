import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormPatientComponent } from './details-form-patient.component';

describe('DetailsFormPatientComponent', () => {
  let component: DetailsFormPatientComponent;
  let fixture: ComponentFixture<DetailsFormPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFormPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFormPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
