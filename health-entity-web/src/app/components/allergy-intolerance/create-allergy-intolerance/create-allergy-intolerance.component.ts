import { Component, OnInit } from '@angular/core';
import { OptionsList } from '../../../models/options-lists';

@Component({
  selector: 'app-create-allergy-intolerance',
  templateUrl: './create-allergy-intolerance.component.html',
  styleUrls: ['./create-allergy-intolerance.component.css']
})
export class CreateAllergyIntoleranceComponent implements OnInit {

  constructor() { }

  clinicalStatus: string;
  verificationStatus: string;
  type: string;
  category: string;
  criticality: string;
  code: string;
  idTypePatient: string;
  idPatient: number;
  idDate: Date;
  firstTime: boolean;
  idTypeRecorder: string;
  idRecorder: number;
  idTypeAsserter: string;
  idAsserter: number;

  clinicalStatusOptions = OptionsList.clinicalStatus;
  verificationStatusOptions = OptionsList.verificationStatus;
  allergyTypeOptions = OptionsList.AllergyIntoleranceType;
  categoryOptions = OptionsList.AllergyIntoleranceCategory;
  criticalityOptions = OptionsList.AllergyIntoleranceCriticality;
  codeOptions = OptionsList.AllergyIntoleranceCode;
  idTypeOptions = OptionsList.identificationTypes;

  ngOnInit(): void { }

  record() {}

}
