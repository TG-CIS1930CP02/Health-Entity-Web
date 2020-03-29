import { Identification } from './identification';
import { Qualification } from './qualification';
import { ContactPoint } from './contactPoint';

export class Practitioner {
  public id: Identification;
  public active: boolean;
  public name: string;
  public telecom: ContactPoint;
  public address: string;
  public qualifications: Qualification[];
  public birthDate: Date;
  public gender: string;

  constructor() { }
}
