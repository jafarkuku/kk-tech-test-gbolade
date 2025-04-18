import { Test, TestingModule } from '@nestjs/testing';
import { CommsController } from './comms.controller';
import { CommsService } from './comms.service';
import { UsersService } from '../user/users.service';
import { NotFoundException } from '@nestjs/common';
import { createFakeUser } from '../test-utils/factories/user.factory';

describe('CommsController', () => {
  let commsController: CommsController;

  const mockUser = createFakeUser({
    id: '123',
    firstName: 'Jane',
    cats: [
      {
        name: 'Milo',
        subscriptionActive: true,
        pouchSize: 'A',
        breed: 'Siamese',
      },
      {
        name: 'Luna',
        subscriptionActive: true,
        pouchSize: 'C',
        breed: 'Ragdoll',
      },
      {
        name: 'Tiger',
        subscriptionActive: false,
        pouchSize: 'E',
        breed: 'Tabby',
      },
    ],
  });

  const mockUsersService = {
    findById: jest.fn((id: string) =>
      id === mockUser.id ? mockUser : undefined,
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommsController],
      providers: [
        CommsService,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    commsController = module.get<CommsController>(CommsController);
  });

  it('should return correct delivery message for valid user', () => {
    const result = commsController.getNextDelivery(mockUser.id);

    expect(result).toEqual({
      title: 'Your next delivery for Milo and Luna',
      message:
        "Hey Jane! In two days' time, we'll be charging you for your next order for Milo and Luna's fresh food.",
      totalPrice: 118.25,
      freeGift: false,
    });
  });

  it('should throw NotFoundException for invalid user', () => {
    expect(() => commsController.getNextDelivery('nonexistent')).toThrow(
      NotFoundException,
    );
  });
});
