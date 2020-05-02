import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAllergyIntoleranceComponent } from './create-allergy-intolerance.component';

describe('CreateAllergyIntoleranceComponent', () => {
  let component: CreateAllergyIntoleranceComponent;
  let fixture: ComponentFixture<CreateAllergyIntoleranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAllergyIntoleranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAllergyIntoleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
