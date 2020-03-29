import { Component, OnInit, Input } from '@angular/core';
import { Qualification } from '../../models/qualification';
import { ContactPoint } from '../../models/contactPoint';
import { Practitioner } from '../../models/practitioner';

@Component({
  selector: 'app-details-practitioner',
  templateUrl: './details-practitioner.component.html',
  styleUrls: ['./details-practitioner.component.css']
})

export class DetailsPractitionerComponent implements OnInit {
  @Input()
  practitioner: Practitioner;

  use = this.practitioner.telecom.use;
  phone = this.practitioner.telecom.value;
  address: string;
  qualifications: Qualification[] =[
    {name: 'aaa', startDate: new Date(), reportingEntity: 'bbb'},
    {name: 'aaa', startDate: new Date(), reportingEntity: 'bbb'}
  ];

  options = [
    {
      name: 'Casa',
      value: 'home'
    },
    {
      name: 'Oficina',
      value: 'work'
    },
    {
      name: 'Temporal',
      value: 'temp'
    },
    {
      name: 'Anterior',
      value: 'old'
    },
    {
      name: 'Celular',
      value: 'mobile'
    }];

  constructor() { }

  ngOnInit(): void {}

  signup() {}
}
