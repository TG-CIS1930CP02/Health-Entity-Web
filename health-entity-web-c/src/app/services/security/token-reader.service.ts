import { Injectable } from '@angular/core';
import { Identification } from 'app/models/identification';

@Injectable({
  providedIn: 'root'
})
export class TokenReaderService {
    public getIdentificationPerformer(): Identification {
        const token = localStorage.getItem('token');
        if (token != null) {
            const parts = token.split('.');
            const payload = parts[1];
            const decodedPayload = atob(payload);
            const payloadObject = JSON.parse(decodedPayload);
            return new Identification(payloadObject.identificationType, payloadObject.identificationNumber);
        } else {
            return null;
        }
    }
}
