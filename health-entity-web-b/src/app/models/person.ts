import { Qualification } from './qualification';

export class Person {
    constructor(
      public name: string,
      public lastname: string,
      public identificationType: string,
      public identificationNumber: number,
      public birthDate: Date,
      public gender: string,
      public bloodType: string,
      public qualifications: any[],
      public deceased: boolean
    ) {}
  }
