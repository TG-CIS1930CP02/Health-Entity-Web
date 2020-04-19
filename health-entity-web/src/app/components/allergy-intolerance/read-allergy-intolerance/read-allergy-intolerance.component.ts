import { Component, OnInit, Input } from '@angular/core';
import { AllergyIntolerance } from '../../../models/allergy-intolerance';

@Component({
  selector: 'app-read-allergy-intolerance',
  templateUrl: './read-allergy-intolerance.component.html',
  styleUrls: ['./read-allergy-intolerance.component.scss']
})
export class ReadAllergyIntoleranceComponent implements OnInit {

  constructor() { }
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
    undefined
  );

  ngOnInit(): void { }

}
