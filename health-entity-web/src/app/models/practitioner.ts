export class Practitioner {
  public id: Identification;
  public active: boolean;
  public name: string;
  public address: string;
  public qualification: Qualification;
  public birthDate: Date;
  public gender: string;

  constructor(
    id: Identification,
    active: boolean,
    name: string,
    address: string,
    qualification: Qualification,
    birthDate: Date,
    gender: string) {}
}
