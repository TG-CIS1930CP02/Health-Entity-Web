import { Component, OnInit } from '@angular/core';
import { Practitioner } from 'app/models/practitioner';
import { PractitionerService } from 'app/services/practitioner.service';
import { Router } from '@angular/router';
import { Qualification } from 'app/models/qualification';

@Component({
  selector: 'app-signup-practitioner',
  templateUrl: './signup-practitioner.component.html',
  styleUrls: ['./signup-practitioner.component.css']
})

export class SignupPractitionerComponent implements OnInit {
  practitioner: Practitioner = new Practitioner();
  incorrectSignup = false;
  found = 'pending';
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

  constructor(
    private practitionerService: PractitionerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  search() {
    this.practitionerService.findByIdentification(this.idType, this.id).subscribe(
      result => {
        console.log(result);
        this.practitioner = result;
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
