import { Component, OnInit, Input } from '@angular/core';
import { Observation } from '../../../models/observation';
import { OptionsList } from 'app/models/options-lists';

@Component({
  selector: 'app-read-observation',
  templateUrl: './read-observation.component.html',
  styleUrls: ['./read-observation.component.scss']
})
export class ReadObservationComponent implements OnInit {

  constructor() { }
  @Input()
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

}
