import { Component, OnInit } from '@angular/core';
import { OptionsList } from '../../../models/options-lists';
import { AllergyIntolerance } from '../../../models/allergy-intolerance';
import { Identification } from '../../../models/identification';
import { Reaction } from '../../../models/reaction';
import { TokenReaderService } from 'app/services/security/token-reader-service';
import { Router, ActivatedRoute } from '@angular/router';
import { AllergyIntoleranceService } from 'app/services/resources/allergy-intolerance-service';

@Component({
  selector: 'app-create-allergy-intolerance',
  templateUrl: './create-allergy-intolerance.component.html',
  styleUrls: ['./create-allergy-intolerance.component.scss']
})
export class CreateAllergyIntoleranceComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private tokenReaderService: TokenReaderService,
              private allergyIntoleranceService: AllergyIntoleranceService) { }

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

  clinicalStatusOptions = OptionsList.AllergyClinicalStatus;
  verificationStatusOptions = OptionsList.AllergyVerificationStatus;
  allergyTypeOptions = OptionsList.AllergyIntoleranceType;
  categoryOptions = OptionsList.AllergyIntoleranceCategory;
  criticalityOptions = OptionsList.AllergyIntoleranceCriticality;
  codeOptions = OptionsList.AllergyIntoleranceCodes;
  idTypeOptions = OptionsList.IdentificationTypes;
  manifestationOptions = OptionsList.ClinicalFindingsCodes;
  severityOptions = OptionsList.AllergyIntoleranceSeverity;
  exposureOptions = OptionsList.ExposureRouteCodes;

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
    if (this.firstTime) {
      this.allergy.recordedDate = new Date();
    }

    this.allergy.patient = new Identification(this.idTypePatient, this.idPatient);
    this.allergy.recorder = this.tokenReaderService.getIdentificationPerformer();

    this.allergyIntoleranceService.createAllergyIntolerance(this.idTypePatient, this.idPatient, this.allergy).
    subscribe(
      result => {
        this.created = true;
      },
      error => {
        this.error = true;
    });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  closeCreated() {
    this.created = false;
    this.router.navigate(
      ['practitioner/view-resources', this.idTypePatient, this.idPatient],
      {
        queryParams: {emergencySearch: false}
    });
  }

  closeError() {
    this.error = false;
  }
}
