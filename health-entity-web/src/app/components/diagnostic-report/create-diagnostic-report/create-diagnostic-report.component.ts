import { Component, OnInit } from '@angular/core';
import { DiagnosticReport } from '../../../models/diagnostic-report';
import { OptionsList } from '../../../models/options-lists';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenReaderService } from 'app/services/security/token-reader-service';
import { DiagnosticReportService } from 'app/services/resources/diagnostic-report-service';
import { Identification } from 'app/models/identification';

@Component({
  selector: 'app-create-diagnostic-report',
  templateUrl: './create-diagnostic-report.component.html',
  styleUrls: ['./create-diagnostic-report.component.scss']
})
export class CreateDiagnosticReportComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
    private tokenReaderService: TokenReaderService,
    private diagnosticReportService: DiagnosticReportService) { }

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

  idTypePatient: any;
  idPatient: any;
  created: boolean = false;
  error: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idTypePatient = params['idType'];
      this.idPatient = params['id'];
    });
  }

  record() {
    // TODO validate all fields
    this.diagnostic.issued = new Date();

     /* TODO sacar info de estos
      this.diagnostic.performer
      this.diagnostic.subject
      this.diagnostic.resultsInterpreter
    */

   this.diagnostic.subject = new Identification(this.idTypePatient, this.idPatient);
   this.diagnostic.performer = this.tokenReaderService.getIdentificationPerformer();
   this.diagnostic.resultsInterpreter = this.tokenReaderService.getIdentificationPerformer();

   this.diagnosticReportService.createDiagnosticReport(this.idTypePatient, this.idPatient, this.diagnostic).
   subscribe(
     result => {
       this.created = true;
     },
     error => {
       this.error = true;
   });
  }

  closeCreated(){
    this.created = false;
    this.router.navigate(
      ['practitioner/view-resources', this.idTypePatient, this.idPatient], 
      {
        queryParams: {emergencySearch: false}
    });
  }

  closeError(){
    this.error = false;
  }
}
