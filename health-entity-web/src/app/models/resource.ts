import { Identification } from './identification';
export class Resource {
  constructor(
    public date: Date,
    public type: string,
    public practitioner: Identification,
    public entity: string,
    public data: string
  ) {}
}
