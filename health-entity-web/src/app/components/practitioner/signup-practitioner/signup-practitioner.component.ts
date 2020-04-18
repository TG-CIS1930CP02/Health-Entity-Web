import { Component, OnInit, Input } from '@angular/core';
import { Practitioner } from 'app/models/practitioner';
import { PractitionerService } from 'app/services/practitioner.service';
import { OptionsList } from '../../../models/options-lists';

@Component({
  selector: 'app-signup-practitioner',
  templateUrl: './signup-practitioner.component.html',
  styleUrls: ['./signup-practitioner.component.css']
})

export class SignupPractitionerComponent implements OnInit {
  @Input()
  isPractitioner = true;
  @Input()
  title = 'Registro profesional de la salud';

  practitionerFound: Practitioner = new Practitioner(
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

  constructor(private practitionerService: PractitionerService) {}

  ngOnInit(): void { }

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
