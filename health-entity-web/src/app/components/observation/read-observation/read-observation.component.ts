import { Component, OnInit, Input } from '@angular/core';
import { Observation } from '../../../models/observation';

@Component({
  selector: 'app-read-observation',
  templateUrl: './read-observation.component.html',
  styleUrls: ['./read-observation.component.css']
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

  ngOnInit(): void { }

}
