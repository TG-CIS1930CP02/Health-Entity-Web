import { Identification } from './identification';
import { ContactPoint } from './contactPoint';
import { Address } from './address';

export class Patient {
  constructor(
    public id: number,
    public identifier: Identification,
    public active: boolean,
    public name: string,
    public telecoms: ContactPoint[],
    public addresses: Address[],
    public birthDate: Date,
    public gender: string
  ) {
    this.identifier = new Identification(undefined, undefined);
    this.telecoms = [];
    this.addresses = [];
  }
}
