import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/patient';
import { OptionsList } from '../../../models/options-lists';
import { PatientService } from '../../../services/patient.service';
import { PersonService } from 'app/services/person.service';
import { Person } from 'app/models/person';
import { Identification } from 'app/models/identification';

@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.scss']
})
export class SignupPatientComponent implements OnInit {
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

  newPatient: Patient = new Patient(
    undefined,
    new Identification(undefined, undefined),
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

  constructor(private personService: PersonService) { }

  ngOnInit(): void { }

  search() {
    this.personService.findByIdentification(this.idType, this.id).subscribe(
      result => {
        this.personFound = result;
        this.newPatient.name = this.personFound.name + ' ' + this.personFound.lastname;
        this.newPatient.identifier.type = this.personFound.identificationType;
        this.newPatient.identifier.id = this.personFound.identificationNumber;
        this.newPatient.birthDate = this.personFound.birthDate;
        this.newPatient.gender = this.personFound.gender;
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
