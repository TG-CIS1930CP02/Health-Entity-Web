import { Identification } from './identification';
import { Observation } from './observation';
export class DiagnosticReport {
  constructor(
    public identifier: number,
    public basedOn: string,
    public status: string,
    public category: string[],
    public code: string,
    public subject: Identification,
    public effectiveDateTime: Date,
    public issued: Date,
    public performer: Identification[],
    public resultsInterpreter: Identification[],
    public result: Observation[],
    public media: string[],
    public conclusion: string,
    public conclusionCode: string[]
  ) {}
}
