import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDiagnosticReportComponent } from './read-diagnostic-report.component';

describe('ReadDiagnosticReportComponent', () => {
  let component: ReadDiagnosticReportComponent;
  let fixture: ComponentFixture<ReadDiagnosticReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadDiagnosticReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDiagnosticReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
