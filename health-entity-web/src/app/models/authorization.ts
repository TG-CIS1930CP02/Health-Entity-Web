import { User } from './user';

export class Authorization {
    constructor(
      public user: User,
      public role: string
    ) {}
  }
