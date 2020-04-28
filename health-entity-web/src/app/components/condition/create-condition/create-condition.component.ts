import { Component, OnInit } from '@angular/core';
import { Condition } from '../../../models/condition';
import { OptionsList } from '../../../models/options-lists';
import { ConditionService } from 'app/services/resources/condition-service';
import { TokenReaderService } from 'app/services/security/token-reader-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Identification } from 'app/models/identification';

@Component({
  selector: 'app-create-condition',
  templateUrl: './create-condition.component.html',
  styleUrls: ['./create-condition.component.scss']
})
export class CreateConditionComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
    private tokenReaderService: TokenReaderService,
    private conditionService: ConditionService) { }

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

  idTypePatient: any;
  idPatient: any;
  created: boolean = false;
  error: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idTypePatient = params['idType'];
      this.idPatient = Number(params['id']);
    });
  }

  record() {
    // TODO validate all fields
    if (this.firstTime) {
      this.condition.recordedDate = new Date();
    }
    this.condition.subject = new Identification(this.idTypePatient, this.idPatient);
    this.condition.recorder = this.tokenReaderService.getIdentificationPerformer();

    this.conditionService.createCondition(this.idTypePatient, this.idPatient, this.condition).
    subscribe(
      result => {
        this.created = true;
      },
      error => {
        this.error = true;
    });
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
