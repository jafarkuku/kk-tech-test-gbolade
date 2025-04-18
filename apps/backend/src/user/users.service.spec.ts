import { UsersService } from './users.service';
import * as fs from 'fs';
import { User } from './users.types';
import { createFakeUser } from '../test-utils/factories/user.factory';

jest.mock('fs');

describe('UsersService', () => {
  const mockUsers: User[] = [
    createFakeUser({
      id: '1',
    }),
    createFakeUser({
      id: '2',
    }),
  ];

  beforeEach(() => {
    (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(mockUsers));
  });

  it('should return a user by ID', () => {
    const usersService = new UsersService();
    const user = usersService.findById('1');
    expect(user).toEqual(mockUsers[0]);
  });

  it('should return undefined if user not found', () => {
    const usersService = new UsersService();
    const user = usersService.findById('does-not-exist');
    expect(user).toBeUndefined();
  });

  it('should return all users', () => {
    const usersService = new UsersService();
    const users = usersService.getAll();
    expect(users).toEqual(mockUsers);
  });
});
