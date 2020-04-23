import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResourcesComponent } from './view-resources.component';

describe('ViewResourcesComponent', () => {
  let component: ViewResourcesComponent;
  let fixture: ComponentFixture<ViewResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
