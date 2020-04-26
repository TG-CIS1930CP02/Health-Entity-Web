import { Person } from './person';

export class Authorization {
    constructor(
      public person: Person,
      public rol: string
    ) {}
  }
