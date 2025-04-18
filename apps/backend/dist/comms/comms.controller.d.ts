import { CommsService } from './comms.service';
export declare class CommsController {
    private readonly commsService;
    constructor(commsService: CommsService);
    getNextDelivery(userId: string): import("./comms.types").CommsMessage;
}
