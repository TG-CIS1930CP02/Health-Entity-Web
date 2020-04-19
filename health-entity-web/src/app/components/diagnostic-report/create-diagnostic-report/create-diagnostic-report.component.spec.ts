import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiagnosticReportComponent } from './create-diagnostic-report.component';

describe('CreateDiagnosticReportComponent', () => {
  let component: CreateDiagnosticReportComponent;
  let fixture: ComponentFixture<CreateDiagnosticReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiagnosticReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiagnosticReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
