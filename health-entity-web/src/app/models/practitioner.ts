import { Identification } from './identification';
import { Qualification } from './qualification';
import { ContactPoint } from './contactPoint';
import { Address } from './address';

export class Practitioner {
  public id: number;
  public identifier: Identification;
  public active: boolean;
  public name: string;
  public telecoms: ContactPoint[];
  public addresses: Address[];
  public qualifications: Qualification[];
  public birthDate: Date;
  public gender: string;

  constructor() {
    this.identifier = new Identification(undefined, undefined);
    this.telecoms = [new ContactPoint(undefined, undefined, undefined)];
    this.qualifications = [new Qualification(undefined, undefined, undefined)];
    this.addresses = [new Address(undefined, undefined, undefined, undefined, undefined)];
  }
}
