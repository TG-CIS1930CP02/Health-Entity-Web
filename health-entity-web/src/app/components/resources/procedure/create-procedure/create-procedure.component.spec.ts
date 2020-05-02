import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProcedureComponent } from './create-procedure.component';

describe('CreateProcedureComponent', () => {
  let component: CreateProcedureComponent;
  let fixture: ComponentFixture<CreateProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
