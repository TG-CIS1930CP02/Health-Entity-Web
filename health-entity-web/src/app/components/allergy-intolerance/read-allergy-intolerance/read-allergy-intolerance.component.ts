import { Component, OnInit, Input } from '@angular/core';
import { AllergyIntolerance } from '../../../models/allergy-intolerance';
import { Reaction } from 'app/models/reaction';

@Component({
  selector: 'app-read-allergy-intolerance',
  templateUrl: './read-allergy-intolerance.component.html',
  styleUrls: ['./read-allergy-intolerance.component.scss']
})
export class ReadAllergyIntoleranceComponent implements OnInit {

  constructor() { }
  reaction = new Reaction(undefined, undefined, undefined, undefined, undefined);

  @Input()
  allergy: AllergyIntolerance = new AllergyIntolerance(
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
    this.reaction
  );

  ngOnInit(): void { }

}
