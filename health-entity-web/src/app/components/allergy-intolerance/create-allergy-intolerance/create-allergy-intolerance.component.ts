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
  asserter: Identification = new Identification(undefined, undefined);
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
    this.asserter,
    undefined,
    undefined,
    this.reaction
  );

  category: string[] = [];
  firstTime: boolean;

  clinicalStatusOptions = OptionsList.clinicalStatus;
  verificationStatusOptions = OptionsList.verificationStatus;
  allergyTypeOptions = OptionsList.AllergyIntoleranceType;
  categoryOptions = OptionsList.AllergyIntoleranceCategory;
  criticalityOptions = OptionsList.AllergyIntoleranceCriticality;
  codeOptions = OptionsList.AllergyIntoleranceCodes;
  idTypeOptions = OptionsList.identificationTypes;
  manifestationOptions = OptionsList.ManifestationsCodes;
  severityOptions = OptionsList.AllergyIntoleranceSeverity;
  exposureOptions = OptionsList.ExposureRouteCodes;

  ngOnInit(): void { }

  record() {
    // TODO validate all fields
    this.allergy.category = this.category;
    if (this.firstTime) {
      this.allergy.recordedDate = new Date();
    }
    /* TODO sacar info de estos
      this.allergy.recorder.id = this.idRecorder;
      this.allergy.recorder.type = this.idTypeRecorder;
      this.allergy.asserter.id = this.idAsserter;
      this.allergy.asserter.type = this.idTypeAsserter;
    */

    // TODO create service to record
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
