import { v4 as uuid } from 'uuid';
import { faker } from '@faker-js/faker';

import { User, Cat } from '../../user/users.types';

const POUCH_SIZES = ['A', 'B', 'C', 'D', 'E', 'F'] as const;

export function createFakeCat(overrides: Partial<Cat> = {}): Cat {
  return {
    name: faker.person.firstName(),
    breed: faker.animal.cat(),
    subscriptionActive: true,
    pouchSize: POUCH_SIZES[Math.floor(Math.random() * POUCH_SIZES.length)],
    ...overrides,
  };
}

export function createFakeUser(overrides: Partial<User> = {}): User {
  return {
    id: uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    cats: [
      createFakeCat(),
      createFakeCat({ subscriptionActive: false }),
      createFakeCat(),
    ],
    ...overrides,
  };
}
