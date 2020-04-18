import { Identification } from './identification';
import { Reaction } from './reaction';

export class AllergyIntolerance {
  constructor(
    public identifier: number,
    public clinicalStatus: string,
    public verificationStatus: string,
    public type: string,
    public category: string[],
    public criticality: string,
    public code: string,
    public patient: Identification,
    public onsetDateTime: Date,
    public recordedDate: Date,
    public recorder: Identification,
    public lastOccurrence: Date,
    public note: string,
    public reaction: Reaction
  ) {
    this.category = [];
  }
}
