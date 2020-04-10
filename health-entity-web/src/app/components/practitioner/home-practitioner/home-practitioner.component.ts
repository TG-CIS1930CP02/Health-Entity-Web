import { Component, OnInit } from '@angular/core';
import { OptionsList } from '../../../models/options-lists';
import { PatientService } from '../../../services/patient.service';
import { Patient } from '../../../models/patient';
import { ContactPoint } from '../../../models/contactPoint';
import { Address } from 'app/models/address';

@Component({
  selector: 'app-home-practitioner',
  templateUrl: './home-practitioner.component.html',
  styleUrls: ['./home-practitioner.component.css']
})
export class HomePractitionerComponent implements OnInit {
  patientFound: Patient = new Patient(
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

  options = OptionsList.identificationTypes;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void { }

  search() {
    this.patientService.findByIdentification(this.idType, this.id).subscribe(
      result => {
        console.log(result);
        this.patientFound = result;
        this.found = 'found';
      },
      error => {
        console.error(error);
        this.found = 'not_found';
      }
    );
  }
}
