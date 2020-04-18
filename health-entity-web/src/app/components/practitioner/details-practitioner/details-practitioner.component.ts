import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Practitioner } from '../../../models/practitioner';
import { PractitionerService } from '../../../services/practitioner.service';
import { Router } from '@angular/router';
import { ContactPoint } from '../../../models/contactPoint';
import { Address } from 'app/models/address';
import { OptionsList } from '../../../models/options-lists';

@Component({
  selector: 'app-details-practitioner',
  templateUrl: './details-practitioner.component.html',
  styleUrls: ['./details-practitioner.component.css']
})

export class DetailsPractitionerComponent implements OnInit {
  @Input()
  hasQualifications: boolean;

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

  displayedColumnsQualification = ['title', 'startDate', 'reportingEntity'];

  telecoms: ContactPoint[] = [];
  addresses: Address[] = [];
  cities = OptionsList.cities;

  incorrectSignup = false;
  successSignup = false;
  enterFingerprint = false;
  checked = false;

  systems = OptionsList.contactPointSystems;
  uses = OptionsList.contactPointUses;
  AddressUses = OptionsList.AddressUses;

  constructor(
    private practitionerService: PractitionerService,
    private router: Router) { }

  ngOnInit(): void {
    this.telecoms = this.practitioner.telecoms;
    this.addresses = this.practitioner.addresses;
  }

  validate() {
    this.enterFingerprint = true;
    // TODO validate values in telecoms and addresses
  }

  signup() {
    if (!this.checked) {
      this.enterFingerprint = false;
      this.incorrectSignup = true;
      return;
    }

    this.checked = false;
    this.enterFingerprint = false;

    this.practitioner.active = true;
    this.practitioner.telecoms = this.telecoms;
    this.practitioner.addresses = this.addresses;

    this.practitionerService.createPractitioner(this.practitioner).subscribe(
      result => {
        console.log(result);
        this.successSignup = true;
        this.router.navigate(['admin/home']);
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

  closeFingerPrint() {
    this.enterFingerprint = false;
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
