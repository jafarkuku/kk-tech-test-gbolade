import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { User } from './users.types';

@Injectable()
export class UsersService {
  private users: User[];

  constructor() {
    this.users = this.loadUsers();
  }

  private loadUsers(): User[] {
    const filePath = path.join(__dirname, '../../data.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  getAll(): User[] {
    return this.users;
  }
}
