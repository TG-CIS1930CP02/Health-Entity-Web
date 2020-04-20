import { Component, OnInit } from '@angular/core';
import { Procedure } from '../../../models/procedure';
import { OptionsList } from '../../../models/options-lists';

@Component({
  selector: 'app-create-procedure',
  templateUrl: './create-procedure.component.html',
  styleUrls: ['./create-procedure.component.scss']
})
export class CreateProcedureComponent implements OnInit {

  constructor() { }
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

  ngOnInit(): void { }

  record() {
    // TODO validate all fields
    this.procedure.performedDateTime = new Date();
    /* TODO sacar info de estos
      performer, recorder y subject
    */

    // TODO create service to record
  }
}
