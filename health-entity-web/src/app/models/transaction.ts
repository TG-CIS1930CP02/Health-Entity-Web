import { Identification } from './identification';

export class Transaction {
  constructor(
    public date: Date,
    public type: string,
    public practitioner: Identification,
    public entity: string,
    public integrity: boolean,
    public data: Map<string, object>
  ) {}
}
