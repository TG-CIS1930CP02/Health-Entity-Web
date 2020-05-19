import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadResourcesComponent } from './read-resources.component';

describe('ReadResourcesComponent', () => {
  let component: ReadResourcesComponent;
  let fixture: ComponentFixture<ReadResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
