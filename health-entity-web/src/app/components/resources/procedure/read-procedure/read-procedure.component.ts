import { Component, OnInit, Input } from '@angular/core';
import { Procedure } from 'app/models/procedure';
import { OptionsList } from 'app/models/options-lists';

@Component({
  selector: 'app-read-procedure',
  templateUrl: './read-procedure.component.html',
  styleUrls: ['./read-procedure.component.scss']
})
export class ReadProcedureComponent implements OnInit {

  constructor() { }
  @Input()
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

}
