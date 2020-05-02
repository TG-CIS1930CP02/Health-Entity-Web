import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadConditionComponent } from './read-condition.component';

describe('ReadConditionComponent', () => {
  let component: ReadConditionComponent;
  let fixture: ComponentFixture<ReadConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
