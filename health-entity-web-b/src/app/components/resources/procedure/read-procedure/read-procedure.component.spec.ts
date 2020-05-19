import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProcedureComponent } from './read-procedure.component';

describe('ReadProcedureComponent', () => {
  let component: ReadProcedureComponent;
  let fixture: ComponentFixture<ReadProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
