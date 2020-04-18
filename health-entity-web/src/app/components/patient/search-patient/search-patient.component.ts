import { Component, OnInit } from '@angular/core';
import { Patient } from 'app/models/patient';
import { OptionsList } from 'app/models/options-lists';
import { PatientService } from 'app/services/patient.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {
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
}
