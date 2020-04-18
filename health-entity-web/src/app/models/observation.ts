import { Identification } from './identification';

export class Observation {
  constructor(
    public identifier: number,
    public basedOn: string,
    public status: string,
    public category: string[],
    public code: string,
    public subject: Identification,
    public effectiveDateTime: Date,
    public issued: Date,
    public performer: Identification,
    public value: string,
    public interpretation: string[],
    public bodySite: string,
    public method: string,
    public referenceRange: string,
    public note: string
  ) {
    this.category = [];
    this.interpretation = [];
  }
}
