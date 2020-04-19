import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'app/models/patient';
import { ContactPoint } from 'app/models/contactPoint';
import { OptionsList } from 'app/models/options-lists';
import { PatientService } from 'app/services/patient.service';
import { Router } from '@angular/router';
import { Address } from 'app/models/address';
import { AuthorizationService } from 'app/services/authorization.service';

@Component({
  selector: 'app-details-form-patient',
  templateUrl: './details-form-patient.component.html',
  styleUrls: ['./details-form-patient.component.scss']
})
export class DetailsFormPatientComponent implements OnInit {
  @Input()
  patient: Patient = new Patient(
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
  alreadyAuthorizedUser = false;
  successSignup = false;
  enterFingerprint = false;
  checked = false;

  systems = OptionsList.contactPointSystems;
  uses = OptionsList.contactPointUses;
  AddressUses = OptionsList.AddressUses;

  constructor(
    private patientService: PatientService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.telecoms = this.patient.telecoms;
    this.addresses = this.patient.addresses;
  }

  validate() {
    this.enterFingerprint = true;
    // TODO validate values in telecoms and addresses
    console.log(this.telecoms);
  }

  signup() {
    if (!this.checked) {
      this.enterFingerprint = false;
      this.incorrectSignup = true;
      return;
    }

    this.checked = false;
    this.enterFingerprint = false;

    this.patient.active = true;
    this.patient.telecoms = this.telecoms;
    this.patient.addresses = this.addresses;
    this.authorizationService.authorizatePatient(this.patient.identifier.type, this.patient.identifier.id, 'fingerprint_test').subscribe(
      result =>{
            this.patientService.createPatient(this.patient).subscribe(
            result => {
                console.log(result);
                this.successSignup = true;
              },
              error => {
                console.error(error);
                this.incorrectSignup = true;
              }
            );
      },
      error => {
          console.error(error);
          if (error.status == 409)
            this.alreadyAuthorizedUser = true;
      }
    );
  }

  closeError() {
    this.incorrectSignup = false;
    this.alreadyAuthorizedUser = false;
  }

  closeSuccess() {
    this.successSignup = false;
    this.router.navigate(['/patient/home']);
  }

  closeFingerPrint() {
    this.enterFingerprint = false;
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
