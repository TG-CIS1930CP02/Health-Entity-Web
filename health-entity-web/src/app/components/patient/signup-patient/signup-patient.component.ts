import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/patient';
import { OptionsList } from '../../../models/options-lists';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.css']
})
export class SignupPatientComponent implements OnInit {
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

  options = OptionsList.IdentificationTypes;

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

  close() {
    this.found = 'pending';
  }
}
