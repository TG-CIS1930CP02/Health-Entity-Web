import { Identification } from './identification';
import { Condition } from './condition';

export class Procedure {
  constructor(
    public identifier: number,
    public basedOn: string,
    public status: string,
    public statusReason: string,
    public category: string,
    public code: string,
    public subject: Identification,
    public performedDateTime: Date,
    public recorder: Identification,
    public performer: Identification,
    public reasonCode: string[],
    public bodySite: string[],
    public outcome: string,
    public complication: string[],
    public complicationDetail: Condition[],
    public followUp: string[],
    public note: string
  ) {}
}
