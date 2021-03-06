import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Practitioner } from '../../../models/practitioner';
import { PractitionerService } from '../../../services/practitioner.service';
import { Router } from '@angular/router';
import { ContactPoint } from '../../../models/contactPoint';
import { Address } from 'app/models/address';
import { OptionsList } from '../../../models/options-lists';
import { AuthorizationService } from 'app/services/authorization.service';
import { RoleEnum } from 'app/models/role-enum';

@Component({
  selector: 'app-details-practitioner',
  templateUrl: './details-practitioner.component.html',
  styleUrls: ['./details-practitioner.component.scss'],
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
  alreadyAuthorizedUser = false;
  successSignup = false;
  enterFingerprint = false;
  checked = false;

  type: string;

  systemOptions = OptionsList.contactPointSystems;
  useOptions = OptionsList.contactPointUses;
  AddressUseOptions = OptionsList.AddressUses;
  roleOptions = OptionsList.PractitionerRoles;

  constructor(
    private practitionerService: PractitionerService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.telecoms = this.practitioner.telecoms;
    this.addresses = this.practitioner.addresses;
  }

  validate() {
    this.enterFingerprint = true;
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

    if (this.hasQualifications) {
      if (this.type === RoleEnum.DOCTOR) {
        this.authorizateDoctor();
      } else if (this.type === RoleEnum.NURSE) {
        this.authorizateNurse();
      }
    } else {
      this.authorizateAdministrativeAssistant();
    }
  }

  authorizateDoctor() {
    this.authorizationService
      .authorizateDoctor(
        this.practitioner.identifier.type,
        this.practitioner.identifier.id,
        'fingerprint_test'
      )
      .subscribe(
        (result) => {
          this.practitionerService
            .createPractitioner(this.practitioner)
            .subscribe(
              (data) => {
                console.log(data);
                this.successSignup = true;
              },
              (error) => {
                console.error(error);
                this.incorrectSignup = true;
              }
            );
        },
        (error) => {
          console.error(error);
          if (error.status === 409) {
            this.alreadyAuthorizedUser = true;
          }
        }
      );
  }
  authorizateNurse() {
    this.authorizationService
      .authorizateNurse(
        this.practitioner.identifier.type,
        this.practitioner.identifier.id,
        'fingerprint_test'
      )
      .subscribe(
        (result) => {
          this.practitionerService
            .createPractitioner(this.practitioner)
            .subscribe(
              (data) => {
                console.log(data);
                this.successSignup = true;
              },
              (error) => {
                console.error(error);
                this.incorrectSignup = true;
              }
            );
        },
        (error) => {
          console.error(error);
          if (error.status === 409) {
            this.alreadyAuthorizedUser = true;
          }
        }
      );
  }

  authorizateAdministrativeAssistant() {
    this.authorizationService
      .authorizateAdministrativeAssistant(
        this.practitioner.identifier.type,
        this.practitioner.identifier.id,
        'fingerprint_test'
      )
      .subscribe(
        (result) => {
          this.practitionerService
            .createPractitioner(this.practitioner)
            .subscribe(
              (data) => {
                console.log(data);
                this.successSignup = true;
              },
              (error) => {
                console.error(error);
                this.incorrectSignup = true;
              }
            );
        },
        (error) => {
          console.error(error);
          if (error.status === 409) {
            this.alreadyAuthorizedUser = true;
          }
        }
      );
  }

  closeError() {
    this.incorrectSignup = false;
    this.alreadyAuthorizedUser = false;
  }

  closeSuccess() {
    this.successSignup = false;
    location.reload();
  }

  addContactPoint() {
    this.telecoms.push(
      new ContactPoint('Selecciona un sistema', 'Selecciona un tipo', null)
    );
  }

  closeFingerPrint() {
    this.enterFingerprint = false;
  }

  deleteContactPoint() {
    this.telecoms.splice(-1, 1);
  }

  addAddress() {
    this.addresses.push(
      new Address(
        'Selecciona una ciudad',
        'Selecciona un tipo',
        '',
        '',
        'Colombia'
      )
    );
  }

  deleteAddress() {
    this.addresses.splice(-1, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
