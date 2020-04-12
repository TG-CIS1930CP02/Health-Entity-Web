import { Person } from './person';

export class User {
    constructor(
      public token: string,
      public person: Person
    ) {}
  }
  