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
  practitioner: Practitioner = new Practitioner (
    undefined,
    undefined,
  );
  incorrectRegister = false;

  constructor(private practitionerService: PractitionerService, private router: Router) { }

  ngOnInit(): void {}

  register() {
    this.practitionerService.createPractitioner(this.practitioner).subscribe(
      result => {
        console.log(result);
        // TODO show correct register
      },
      error => {
        console.error(error);
        this.incorrectRegister = true;
      }
    );
  }

  close() {
    this.incorrectRegister = false;
  }
}
