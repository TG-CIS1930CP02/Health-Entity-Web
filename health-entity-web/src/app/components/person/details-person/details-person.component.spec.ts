import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPersonComponent } from './details-person.component';

describe('DetailsPersonComponent', () => {
  let component: DetailsPersonComponent;
  let fixture: ComponentFixture<DetailsPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
