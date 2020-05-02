import { Component, OnInit } from '@angular/core';
import { TokenReaderService } from 'app/services/security/token-reader.service';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.scss']
})
export class HomePatientComponent implements OnInit {

  constructor(private tokenReaderService: TokenReaderService) { }

  idType: string;
  id: number;

  ngOnInit(): void {
    const identification = this.tokenReaderService.getIdentificationPerformer();
    this.idType = identification.type;
    this.id = identification.id;
  }

}
