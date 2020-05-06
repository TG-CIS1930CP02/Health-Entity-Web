import { Component, OnInit, Input } from '@angular/core';
import { DiagnosticReport } from '../../../../models/diagnostic-report';
import { OptionsList } from 'app/models/options-lists';

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

  statusOptions = OptionsList.diagnosticStatusCodes;
  categoryOptions = OptionsList.diagnosticCategoryCodes;
  codeOptions = OptionsList.LOINCCodes;
  conclusionOptions = OptionsList.ClinicalFindingsCodes;

  ngOnInit(): void { }

}
