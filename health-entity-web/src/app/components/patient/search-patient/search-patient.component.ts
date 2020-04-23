import { Component, OnInit } from '@angular/core';
import { Patient } from 'app/models/patient';
import { OptionsList } from 'app/models/options-lists';
import { PatientService } from 'app/services/patient.service';
import { AuthorizationService } from 'app/services/authorization.service';
import { PersonService } from 'app/services/person.service';
import { Person } from 'app/models/person';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.scss']
})
export class SearchPatientComponent implements OnInit {
  personFound: Person = new Person(
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
  authorized = 'pending';
  idType = 'Selecciona un tipo';
  id: number;

  idOptions = OptionsList.IdentificationTypes;

  constructor
  (
    private patientService: PatientService,
    private personService: PersonService,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void { }

  search() {
    this.personService.findByIdentification(this.idType, this.id).subscribe(
      result => {
        console.log(result);
        this.personFound = result;
        this.found = 'found';
      },
      error => {
        console.error(error);
        this.found = 'not_found';
      }
    );
  }

  emergencySearch() {}

  getAuthorization() {
    this.authorizationService.getAuthorizationForPatientInformation(this.idType, this.id).subscribe(
      result => {
        console.log(result);
        localStorage.set('token', result.token);
        this.authorized = 'authorized';
      },
      error => {
        console.error(error);
        this.authorized = 'not_authorized';
      }
    );
  }

  closeNotFound() {
    this.found = 'pending';
  }

  closeNotAuthorized(){
    this.authorized = 'pending';
  }
}
