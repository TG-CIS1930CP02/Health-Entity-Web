import { Component, OnInit, Input } from '@angular/core';
import { Practitioner } from 'app/models/practitioner';
import { PractitionerService } from 'app/services/practitioner.service';
import { OptionsList } from '../../../models/options-lists';
import { Person } from 'app/models/person';
import { PersonService } from 'app/services/person.service';

@Component({
  selector: 'app-signup-practitioner',
  templateUrl: './signup-practitioner.component.html',
  styleUrls: ['./signup-practitioner.component.scss']
})

export class SignupPractitionerComponent implements OnInit {
  @Input()
  isPractitioner = true;
  @Input()
  title = 'Registro profesional de la salud';

  personFound: Person = new Person(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  );

  newPractitioner: Practitioner = new Practitioner(
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
  found = 'pending';
  idType = 'Selecciona un tipo';
  id: number;

  options = OptionsList.IdentificationTypes;

  constructor(private personService: PersonService) {}

  ngOnInit(): void { }

  search() {
    this.personService.findByIdentification(this.idType, this.id).subscribe(
      result => {
        this.personFound = result;
        this.newPractitioner.name = this.personFound.name + ' ' + this.personFound.lastName;
        this.newPractitioner.identifier.type = this.personFound.identificationType;
        this.newPractitioner.identifier.id = this.personFound.identificationNumber;
        this.newPractitioner.birthDate = this.personFound.birthDate;
        this.newPractitioner.gender = this.personFound.gender;
        this.found = 'found';
      },
      error => {
        console.error(error);
        this.found = 'not_found';
      }
    );
  }

  close() {
    this.found = 'pending';
  }
}
