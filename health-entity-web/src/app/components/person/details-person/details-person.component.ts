import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'app/models/person';

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrls: ['./details-person.component.scss']
})
export class DetailsPersonComponent implements OnInit {

  @Input()
  person: Person = new Person(
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

  constructor() { }

  ngOnInit(): void {
  }

}
