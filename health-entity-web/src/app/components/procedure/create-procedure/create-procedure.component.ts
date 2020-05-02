import { Component, OnInit } from '@angular/core';
import { Procedure } from '../../../models/procedure';
import { OptionsList } from '../../../models/options-lists';
import { TokenReaderService } from 'app/services/security/token-reader-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcedureService } from 'app/services/resources/procedure-service';
import { Identification } from 'app/models/identification';

@Component({
  selector: 'app-create-procedure',
  templateUrl: './create-procedure.component.html',
  styleUrls: ['./create-procedure.component.scss']
})
export class CreateProcedureComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private tokenReaderService: TokenReaderService,
              private procedureService: ProcedureService) { }

  procedure: Procedure = new Procedure(
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
    undefined,
    undefined,
    undefined,
    undefined
  );

  statusOptions = OptionsList.ProcedureStatus;
  statusReasonOptions = OptionsList.ProcedureStatusReason;
  categoryOptions = OptionsList.ProcedureCategory;
  codeOptions = OptionsList.ProcedureCodes;
  clinicalFindingsOptions = OptionsList.ClinicalFindingsCodes;
  bodyOptions = OptionsList.BodyStructure;
  outcomeOptions = OptionsList.ProcedureOutcome;
  followUpOptions = OptionsList.ProcedureFollowUp;

  idTypePatient: any;
  idPatient: any;
  created = false;
  error = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idTypePatient = params['idType'];
      this.idPatient = Number(params['id']);
    });
  }

  record() {
    // TODO validate all fields

    this.procedure.performedDateTime = new Date();
    this.procedure.subject = new Identification(this.idTypePatient, this.idPatient);
    this.procedure.performer = this.tokenReaderService.getIdentificationPerformer();

    this.procedureService.createProcedure(this.idTypePatient, this.idPatient, this.procedure).
    subscribe(
      result => {
        this.created = true;
      },
      error => {
        this.error = true;
    });

     /* TODO sacar info de estos
      subject, performer
    */
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
