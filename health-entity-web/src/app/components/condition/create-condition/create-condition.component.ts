import { Component, OnInit } from '@angular/core';
import { Condition } from '../../../models/condition';
import { OptionsList } from '../../../models/options-lists';

@Component({
  selector: 'app-create-condition',
  templateUrl: './create-condition.component.html',
  styleUrls: ['./create-condition.component.css']
})
export class CreateConditionComponent implements OnInit {

  constructor() { }

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

  firstTime: boolean;

  ngOnInit(): void { }

  record() {
    // TODO validate all fields
    if (this.firstTime) {
      this.condition.recordedDate = new Date();
    }
    /* TODO sacar info de estos
      recorder y subject
    */

    // TODO create service to record
  }
}
