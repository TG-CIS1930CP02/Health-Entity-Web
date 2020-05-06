import { Component, OnInit } from '@angular/core';
import { Observation } from '../../../../models/observation';
import { OptionsList } from '../../../../models/options-lists';
import { ActivatedRoute, Router } from '@angular/router';
import { Identification } from 'app/models/identification';
import { TokenReaderService } from 'app/services/security/token-reader.service';
import { ObservationService } from 'app/services/resources/observation.service';

@Component({
  selector: 'app-create-observation',
  templateUrl: './create-observation.component.html',
  styleUrls: ['./create-observation.component.scss']
})
export class CreateObservationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private tokenReaderService: TokenReaderService,
    private observationService: ObservationService) { }
  observation: Observation = new Observation(
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

  statusOptions = OptionsList.ObservationStatus;
  categoryOptions = OptionsList.ObservationCategory;
  codeOptions = OptionsList.LOINCCodes;
  interpretationOptions = OptionsList.ObservationInterpretationCodes;
  bodyOptions = OptionsList.BodyStructure;
  methodOptions = OptionsList.ObservationMethod;

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
    this.observation.issued = new Date();
    this.observation.subject = new Identification(this.idTypePatient, this.idPatient);
    this.observation.performer = this.tokenReaderService.getIdentificationPerformer();

    this.observationService.createObservation(this.idTypePatient, this.idPatient, this.observation).
    subscribe(
      result => {
        this.created = true;
      },
      error => {
        this.error = true;
    });
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
