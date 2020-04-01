import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPractitionerComponent } from './details-practitioner.component';

describe('DetailsPractitionerComponent', () => {
  let component: DetailsPractitionerComponent;
  let fixture: ComponentFixture<DetailsPractitionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
