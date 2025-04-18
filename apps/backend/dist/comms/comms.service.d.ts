import { UsersService } from '../user/users.service';
import { CommsMessage } from './comms.types';
export declare class CommsService {
    private readonly users;
    constructor(users: UsersService);
    getDeliveryMessage(userId: string): CommsMessage;
}
