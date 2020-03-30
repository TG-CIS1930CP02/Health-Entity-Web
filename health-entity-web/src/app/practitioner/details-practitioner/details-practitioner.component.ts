import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Practitioner } from '../../models/practitioner';
import { PractitionerService } from '../../services/practitioner.service';
import { Router } from '@angular/router';
import { ContactPoint } from '../../models/contactPoint';
import { Address } from 'app/models/address';

@Component({
  selector: 'app-details-practitioner',
  templateUrl: './details-practitioner.component.html',
  styleUrls: ['./details-practitioner.component.css']
})

export class DetailsPractitionerComponent implements OnInit {
  @Input()
  practitioner: Practitioner = new Practitioner(
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

  telecoms: ContactPoint[] = [];
  addresses: Address[] = [];

  incorrectSignup = false;
  successSignup = false;

  systems = [
    { name: 'Teléfono', value: 'phone' },
    { name: 'Fax', value: 'fax' },
    { name: 'Email', value: 'email' },
    { name: 'SMS', value: 'sms' },
    { name: 'Otro', value: 'other' }];

  uses = [
    { name: 'Casa', value: 'home' },
    { name: 'Oficina', value: 'work' },
    { name: 'Temporal', value: 'temp' },
    { name: 'Anterior', value: 'old' },
    { name: 'Celular', value: 'mobile' }];

  constructor(
    private practitionerService: PractitionerService,
    private router: Router) { }

  ngOnInit(): void {
    this.telecoms = this.practitioner.telecoms;
    this.telecoms.push(new ContactPoint('Selecciona un sistema', 'Selecciona un tipo', null));
    this.addresses = this.practitioner.addresses;
  }

  signup() {
    this.practitioner.active = true;
    this.practitioner.telecoms = this.telecoms;
    this.practitioner.addresses = this.addresses;

    this.practitionerService.createPractitioner(this.practitioner).subscribe(
      result => {
        console.log(result);
        this.successSignup = true;
      },
      error => {
        console.error(error);
        this.incorrectSignup = true;
      }
    );
  }

  closeError() {
    this.incorrectSignup = false;
  }

  closeSuccess() {
    this.successSignup = false;
    this.router.navigate(['/practitioner/home']);
  }
}
