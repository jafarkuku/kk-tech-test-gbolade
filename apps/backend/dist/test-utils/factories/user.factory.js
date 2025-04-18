"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFakeUser = exports.createFakeCat = void 0;
const uuid_1 = require("uuid");
const pouchSizes = ['A', 'B', 'C', 'D', 'E', 'F'];
function createFakeCat(overrides = {}) {
    return {
        name: `Cat-${Math.random().toString(36).substring(7)}`,
        breed: 'British Shorthair',
        subscriptionActive: true,
        pouchSize: pouchSizes[Math.floor(Math.random() * pouchSizes.length)],
        ...overrides,
    };
}
exports.createFakeCat = createFakeCat;
function createFakeUser(overrides = {}) {
    return {
        id: (0, uuid_1.v4)(),
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
exports.createFakeUser = createFakeUser;
//# sourceMappingURL=user.factory.js.map