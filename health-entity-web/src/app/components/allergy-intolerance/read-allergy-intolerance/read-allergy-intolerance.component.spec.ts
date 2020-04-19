import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAllergyIntoleranceComponent } from './read-allergy-intolerance.component';

describe('ReadAllergyIntoleranceComponent', () => {
  let component: ReadAllergyIntoleranceComponent;
  let fixture: ComponentFixture<ReadAllergyIntoleranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAllergyIntoleranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAllergyIntoleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
