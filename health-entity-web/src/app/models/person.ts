export class Person {
    constructor(
      public name: string,
      public lastName: string,
      public identificationType: string,
      public identificationNumber: number,
      public birthDate: string,
      public gender: string,
      public qualifications: any[],
      public deceased: boolean
    ) {}
  }
  