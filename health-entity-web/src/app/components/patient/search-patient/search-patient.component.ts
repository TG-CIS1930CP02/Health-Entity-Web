import { Component, OnInit } from '@angular/core';
import { Patient } from 'app/models/patient';
import { OptionsList } from 'app/models/options-lists';
import { PatientService } from 'app/services/patient.service';
import { AuthorizationService } from 'app/services/authorization.service';
import { PersonService } from 'app/services/person.service';
import { Person } from 'app/models/person';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private patientService: PatientService,
    private personService: PersonService,
    private authorizationService: AuthorizationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idType = params['idType'];
      this.id = params['id'];
      const search = params['search'];
      if (search === 'true') {
        this.search();
      }
    });
  }

  search() {
    this.personService.findByIdentification(this.idType, this.id).subscribe(
      result => {
        this.updateRoute();
        console.log(result);
        this.personFound = result;
        this.found = 'found';
      },
      error => {
        this.updateRoute();
        console.error(error);
        this.found = 'not_found';
      }
    );
  }

  updateRoute() {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {idType: this.idType, id: this.id, search: true}
    });
  }

  emergencySearch() {
    this.router.navigate(
      ['practitioner/view-resources', this.idType, this.id],
      {
        queryParams: {emergencySearch: true}
    });
  }

  getAuthorization() {
    this.authorizationService.getAuthorizationForPatientInformation(this.idType, this.id).subscribe(
      result => {
        console.log(result);
        localStorage.setItem('token', result.token);
        this.authorized = 'authorized';
        this.router.navigate(
          ['practitioner/view-resources', this.idType, this.id],
          {
            queryParams: {emergencySearch: false}
        });
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

  closeNotAuthorized() {
    this.authorized = 'pending';
  }
}
