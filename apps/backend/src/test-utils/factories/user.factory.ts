import { User, Cat } from '../../user/users.types';
import { v4 as uuid } from 'uuid';

const pouchSizes = ['A', 'B', 'C', 'D', 'E', 'F'] as const;

export function createFakeCat(overrides: Partial<Cat> = {}): Cat {
  return {
    name: `Cat-${Math.random().toString(36).substring(7)}`,
    breed: 'British Shorthair',
    subscriptionActive: true,
    pouchSize: pouchSizes[Math.floor(Math.random() * pouchSizes.length)],
    ...overrides,
  };
}

export function createFakeUser(overrides: Partial<User> = {}): User {
  return {
    id: uuid(),
    firstName: 'Testy',
    lastName: 'McTestface',
    email: 'test@example.com',
    cats: [
      createFakeCat(),
      createFakeCat({ subscriptionActive: false }),
      createFakeCat(),
    ],
    ...overrides,
  };
}
