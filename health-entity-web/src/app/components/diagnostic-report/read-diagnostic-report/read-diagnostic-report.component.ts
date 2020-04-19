import { Component, OnInit, Input } from '@angular/core';
import { DiagnosticReport } from '../../../models/diagnostic-report';

@Component({
  selector: 'app-read-diagnostic-report',
  templateUrl: './read-diagnostic-report.component.html',
  styleUrls: ['./read-diagnostic-report.component.scss']
})
export class ReadDiagnosticReportComponent implements OnInit {

  constructor() { }
  @Input()
  diagnostic: DiagnosticReport = new DiagnosticReport(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  ngOnInit(): void { }

}
