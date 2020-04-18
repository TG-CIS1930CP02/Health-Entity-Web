import { Identification } from './identification';

export class Condition {
  constructor(
    public identifier: number,
    public clinicalStatus: string,
    public verificationStatus: string,
    public severity: string,
    public code: string,
    public bodySite: string[],
    public subject: Identification,
    public onsetDateTime: Date,
    public recorder: Identification,
    public recordedDate: Date,
    public note: string,
  ) {
    this.bodySite = [];
  }
}
