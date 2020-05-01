import { User } from './user';
import { HealthEntity } from './health-entity';

export class Authorization {
    constructor(
      public id: number,
      public user: User,
      public healthEntity: HealthEntity,
      public role: string
    ) {}
  }
