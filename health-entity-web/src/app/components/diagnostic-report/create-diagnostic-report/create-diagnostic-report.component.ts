import { Component, OnInit } from '@angular/core';
import { DiagnosticReport } from '../../../models/diagnostic-report';
import { OptionsList } from '../../../models/options-lists';

@Component({
  selector: 'app-create-diagnostic-report',
  templateUrl: './create-diagnostic-report.component.html',
  styleUrls: ['./create-diagnostic-report.component.css']
})
export class CreateDiagnosticReportComponent implements OnInit {

  constructor() { }

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
    undefined,
    undefined
  );

  statusOptions = OptionsList.diagnosticStatusCodes;
  categoryOptions = OptionsList.diagnosticCategoryCodes;
  codeOptions = OptionsList.diagnosticCodes;
  conclusionOptions = OptionsList.ClinicalFindingsCodes;

  ngOnInit(): void { }

  record() {
    // TODO validate all fields
    this.diagnostic.issued = new Date();

     /* TODO sacar info de estos
      this.diagnostic.performer
      this.diagnostic.subject
      this.diagnostic.resultsInterpreter
    */
  }
}
