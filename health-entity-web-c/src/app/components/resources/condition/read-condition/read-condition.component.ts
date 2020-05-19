import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'app/models/condition';
import { OptionsList } from 'app/models/options-lists';

@Component({
  selector: 'app-read-condition',
  templateUrl: './read-condition.component.html',
  styleUrls: ['./read-condition.component.scss']
})
export class ReadConditionComponent implements OnInit {

  constructor() { }

  @Input()
  condition: Condition = new Condition(
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
  );

  clinicalStatusOptions = OptionsList.ConditionClinicalStatus;
  verificationStatusOptions = OptionsList.ConditionVerificationStatus;
  severityOptions = OptionsList.AllergyIntoleranceSeverity;
  codeOptions = OptionsList.ClinicalFindingsCodes;
  bodyOptions = OptionsList.BodyStructure;

  ngOnInit(): void { }

}
