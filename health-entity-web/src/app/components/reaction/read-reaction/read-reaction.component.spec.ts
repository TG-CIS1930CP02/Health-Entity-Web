import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadReactionComponent } from './read-reaction.component';

describe('ReadReactionComponent', () => {
  let component: ReadReactionComponent;
  let fixture: ComponentFixture<ReadReactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadReactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
