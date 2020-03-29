import { Component, OnInit } from '@angular/core';
import { Practitioner } from 'app/models/practitioner';
import { PractitionerService } from 'app/services/practitioner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-practitioner',
  templateUrl: './signup-practitioner.component.html',
  styleUrls: ['./signup-practitioner.component.css']
})

export class SignupPractitionerComponent implements OnInit {
  practitioner: Practitioner = new Practitioner(undefined, undefined);
  incorrectSignup = false;
  selectedType = 'Selecciona un tipo';
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

  signup() {
    this.practitionerService.createPractitioner(this.practitioner).subscribe(
      result => {
        console.log(result);
        // TODO show correct register
      },
      error => {
        console.error(error);
        this.incorrectSignup = true;
      }
    );
  }

  close() {
    this.incorrectSignup = false;
  }
}
