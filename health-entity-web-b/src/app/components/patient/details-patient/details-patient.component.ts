import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../../../models/patient';
import { ContactPoint } from '../../../models/contactPoint';
import { OptionsList } from '../../../models/options-lists';
import { PatientService } from '../../../services/patient.service';
import { Address } from 'app/models/address';
import { AuthorizationService } from 'app/services/authorization.service';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.scss']
})
export class DetailsPatientComponent implements OnInit {
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

  displayedColumnsContact = ['type', 'system', 'value'];
  displayedColumnsAddress = ['city', 'type', 'name', 'address'];

  telecoms: ContactPoint[] = [];
  addresses: Address[] = [];
  cities = OptionsList.cities;

  incorrectSignup = false;
  successSignup = false;

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

  signup() {
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
          this.incorrectSignup = true;
      }

    );
  }

  closeError() {
    this.incorrectSignup = false;
  }

  closeSuccess() {
    this.successSignup = false;
    this.router.navigate(['/patient/home']);
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
