import { Identification } from './identification';
import { Qualification } from './qualification';
import { ContactPoint } from './contactPoint';
import { Address } from './address';

export class Practitioner {
  constructor(
    public id: number,
    public identifier: Identification,
    public active: boolean,
    public name: string,
    public telecoms: ContactPoint[],
    public addresses: Address[],
    public qualifications: Qualification[],
    public birthDate: Date,
    public gender: string
  ) {
    this.identifier = new Identification(undefined, undefined);
    this.telecoms = [];
    this.qualifications = [];
    this.addresses = [];
  }
}
