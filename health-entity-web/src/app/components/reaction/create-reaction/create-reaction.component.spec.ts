import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReactionComponent } from './create-reaction.component';

describe('CreateReactionComponent', () => {
  let component: CreateReactionComponent;
  let fixture: ComponentFixture<CreateReactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
