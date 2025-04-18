import { Test, TestingModule } from '@nestjs/testing';
import { CommsService } from './comms.service';
import { UsersService } from '../user/users.service';
import { NotFoundException } from '@nestjs/common';
import { createFakeUser } from '../test-utils/factories/user.factory';

describe('CommsService', () => {
  let commsService: CommsService;

  const mockUser = createFakeUser({
    id: 'abc123',
    firstName: 'Kayleigh',
    cats: [
      {
        name: 'Dorian',
        subscriptionActive: true,
        pouchSize: 'C',
        breed: 'Thai',
      },
      {
        name: 'Ocie',
        subscriptionActive: true,
        pouchSize: 'F',
        breed: 'Somali',
      },
      {
        name: 'Eldridge',
        subscriptionActive: false,
        pouchSize: 'A',
        breed: 'Himalayan',
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
      providers: [
        CommsService,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    commsService = module.get<CommsService>(CommsService);
  });

  it('should return correct delivery message for valid user', () => {
    const result = commsService.getDeliveryMessage(mockUser.id);

    expect(result).toEqual({
      title: 'Your next delivery for Dorian and Ocie',
      message:
        "Hey Kayleigh! In two days' time, we'll be charging you for your next order for Dorian and Ocie's fresh food.",
      totalPrice: 134.0,
      freeGift: true,
    });
  });

  it('should throw NotFoundException and log for invalid user ID', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => commsService.getDeliveryMessage('does-not-exist')).toThrow(
      new NotFoundException('User not found'),
    );

    expect(spy).toHaveBeenCalledWith('User not found');

    spy.mockRestore();
  });
});
