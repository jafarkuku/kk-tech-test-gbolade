import { User } from './users.types';
export declare class UsersService {
    private users;
    constructor();
    private loadUsers;
    findById(id: string): User | undefined;
    getAll(): User[];
}
