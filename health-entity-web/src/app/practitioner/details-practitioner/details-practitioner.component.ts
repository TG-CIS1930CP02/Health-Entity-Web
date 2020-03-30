import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Practitioner } from '../../models/practitioner';
import { PractitionerService } from '../../services/practitioner.service';
import { Router } from '@angular/router';
import { ContactPoint } from '../../models/contactPoint';
import { Address } from 'app/models/address';
import { OptionsList } from '../../models/options-lists';

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
  cities = OptionsList.cities;

  incorrectSignup = false;
  successSignup = false;

  systems = OptionsList.contactPointSystems;
  uses = OptionsList.contactPointUses;
  addressUses = OptionsList.addressUses;

  constructor(
    private practitionerService: PractitionerService,
    private router: Router) { }

  ngOnInit(): void {
    this.telecoms = this.practitioner.telecoms;
    this.addresses = this.practitioner.addresses;
  }

  signup() {
    // TODO validate value in telecoms
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

  addContactPoint() {
    this.telecoms.push(new ContactPoint('Selecciona un sistema', 'Selecciona un tipo', null));
  }

  deleteContactPoint() {
    this.telecoms.splice(- 1, 1);
  }

  addAddress() {
    this.addresses.push(new Address('Selecciona una ciudad', 'Selecciona un tipo', '', '', 'Colombia'));
  }

  deleteAddress() {
    this.addresses.splice(- 1, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
