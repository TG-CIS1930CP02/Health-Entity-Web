import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadObservationComponent } from './read-observation.component';

describe('ReadObservationComponent', () => {
  let component: ReadObservationComponent;
  let fixture: ComponentFixture<ReadObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
