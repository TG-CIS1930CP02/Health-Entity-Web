import { Component, OnInit } from '@angular/core';
import { OptionsList } from '../../../models/options-lists';
import { AllergyIntolerance } from '../../../models/allergy-intolerance';
import { Identification } from '../../../models/identification';
import { Reaction } from '../../../models/reaction';

@Component({
  selector: 'app-create-allergy-intolerance',
  templateUrl: './create-allergy-intolerance.component.html',
  styleUrls: ['./create-allergy-intolerance.component.css']
})
export class CreateAllergyIntoleranceComponent implements OnInit {

  constructor() { }
  patient: Identification = new Identification(undefined, undefined);
  recorder: Identification = new Identification(undefined, undefined);
  reaction: Reaction = new Reaction(undefined, undefined, undefined, undefined, undefined);

  allergy: AllergyIntolerance = new AllergyIntolerance(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    this.patient,
    undefined,
    undefined,
    this.recorder,
    undefined,
    undefined,
    this.reaction
  );

  firstTime: boolean;

  clinicalStatusOptions = OptionsList.clinicalStatus;
  verificationStatusOptions = OptionsList.verificationStatus;
  allergyTypeOptions = OptionsList.AllergyIntoleranceType;
  categoryOptions = OptionsList.AllergyIntoleranceCategory;
  criticalityOptions = OptionsList.AllergyIntoleranceCriticality;
  codeOptions = OptionsList.AllergyIntoleranceCodes;
  idTypeOptions = OptionsList.identificationTypes;
  manifestationOptions = OptionsList.ClinicalFindingsCodes;
  severityOptions = OptionsList.AllergyIntoleranceSeverity;
  exposureOptions = OptionsList.ExposureRouteCodes;

  ngOnInit(): void { }

  record() {
    // TODO validate all fields
    if (this.firstTime) {
      this.allergy.recordedDate = new Date();
    }
    /* TODO sacar info de estos
      recorder y patient
    */

    // TODO create service to record
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
