import { Component, OnInit } from '@angular/core';
import { Observation } from '../../../models/observation';
import { OptionsList } from '../../../models/options-lists';

@Component({
  selector: 'app-create-observation',
  templateUrl: './create-observation.component.html',
  styleUrls: ['./create-observation.component.scss']
})
export class CreateObservationComponent implements OnInit {

  constructor() { }
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


  ngOnInit(): void { }

  record() {
    // TODO validate all fields
    this.observation.issued = new Date();

     /* TODO sacar info de estos
      subject, performer
    */
  }
}
