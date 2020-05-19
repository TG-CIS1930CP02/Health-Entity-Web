import { Component, OnInit, Input } from '@angular/core';
import { ResourceEnum } from '../../../../../../health-entity-web/src/app/models/resource-enum';
import { OptionsList } from 'app/models/options-lists';

@Component({
  selector: 'app-read-resources',
  templateUrl: './read-resources.component.html',
  styleUrls: ['./read-resources.component.scss']
})
export class ReadResourcesComponent implements OnInit {
  @Input()
  resourceType: string;

  @Input()
  resource: any;

  resources = ResourceEnum;
  allergyClinicalStatusOptions = OptionsList.AllergyClinicalStatus;
  allergyVerificationStatusOptions = OptionsList.AllergyVerificationStatus;
  allergyTypeOptions = OptionsList.AllergyIntoleranceType;
  categoryOptions = OptionsList.AllergyIntoleranceCategory;
  criticalityOptions = OptionsList.AllergyIntoleranceCriticality;
  codeOptions = OptionsList.AllergyIntoleranceCodes;
  idTypeOptions = OptionsList.IdentificationTypes;
  severityOptions = OptionsList.AllergyIntoleranceSeverity;
  exposureOptions = OptionsList.ExposureRouteCodes;

  conditionClinicalStatusOptions = OptionsList.ConditionClinicalStatus;
  conditionVerificationStatusOptions = OptionsList.ConditionVerificationStatus;
  bodyOptions = OptionsList.BodyStructure;

  diagnosticStatusOptions = OptionsList.diagnosticStatusCodes;
  diagnostigCategoryOptions = OptionsList.diagnosticCategoryCodes;
  LOINCOptions = OptionsList.LOINCCodes;

  observationStatusOptions = OptionsList.ObservationStatus;
  observationCategoryOptions = OptionsList.ObservationCategory;
  interpretationOptions = OptionsList.ObservationInterpretationCodes;
  methodOptions = OptionsList.ObservationMethod;

  procedureStatusOptions = OptionsList.ProcedureStatus;
  statusReasonOptions = OptionsList.ProcedureStatusReason;
  procedureCategoryOptions = OptionsList.ProcedureCategory;
  procedureCodeOptions = OptionsList.ProcedureCodes;
  clinicalFindingsOptions = OptionsList.ClinicalFindingsCodes;
  outcomeOptions = OptionsList.ProcedureOutcome;
  followUpOptions = OptionsList.ProcedureFollowUp;

  constructor() { }

  ngOnInit(): void {
  }

}
