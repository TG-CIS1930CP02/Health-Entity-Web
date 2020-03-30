import { Component, OnInit } from '@angular/core';
import { Practitioner } from 'app/models/practitioner';
import { PractitionerService } from 'app/services/practitioner.service';
import { Identification } from 'app/models/identification';

@Component({
  selector: 'app-signup-practitioner',
  templateUrl: './signup-practitioner.component.html',
  styleUrls: ['./signup-practitioner.component.css']
})

export class SignupPractitionerComponent implements OnInit {
  practitionerFound: Practitioner = new Practitioner();
  found = 'found';
  idType = 'Selecciona un tipo';
  id: number;

  options = [
    {
      name: 'Cédula de Ciudadanía',
      value: 'CC'
    },
    {
      name: 'Cédula de Extranjería',
      value: 'CE'
    },
    {
      name: 'Registro Civil',
      value: 'RC'
    },
    {
      name: 'Tarjeta de Identidad',
      value: 'TI'
    }
  ];

  constructor(private practitionerService: PractitionerService) {}

  ngOnInit(): void {
    this.practitionerFound.name = 'hola';
    this.practitionerFound.birthDate = new Date();
    this.practitionerFound.addresses[0].line = '1234567';
    this.practitionerFound.gender = 'M';
    this.practitionerFound.identifier.type = 'CC';
    this.practitionerFound.identifier.number = 1234;
    this.practitionerFound.telecoms[0].use = 'home';
    this.practitionerFound.telecoms[0].value = 1234;
  }

  search() {
    this.practitionerService.findByIdentification(this.idType, this.id).subscribe(
      result => {
        console.log(result);
        this.practitionerFound = result;
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
