"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../user/users.service");
const format_cat_names_1 = require("./utils/format-cat-names");
const PRICE_MAP = {
    A: 55.5,
    B: 59.5,
    C: 62.75,
    D: 66,
    E: 69,
    F: 71.25,
};
let CommsService = class CommsService {
    constructor(users) {
        this.users = users;
    }
    getDeliveryMessage(userId) {
        const user = this.users.findById(userId);
        if (!user) {
            const error = 'User not found';
            console.error(error);
            throw new common_1.NotFoundException(error);
        }
        const activeCats = user.cats.filter(({ subscriptionActive }) => subscriptionActive);
        const names = (0, format_cat_names_1.formatCatNames)(activeCats.map(({ name }) => name));
        const totalPrice = activeCats.reduce((sum, cat) => sum + PRICE_MAP[cat.pouchSize], 0);
        return {
            title: `Your next delivery for ${names}`,
            message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${names}'s fresh food.`,
            totalPrice: parseFloat(totalPrice.toFixed(2)),
            freeGift: totalPrice > 120,
        };
    }
};
exports.CommsService = CommsService;
exports.CommsService = CommsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], CommsService);
//# sourceMappingURL=comms.service.js.map