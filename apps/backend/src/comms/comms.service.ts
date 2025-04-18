import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { formatCatNames } from './utils/format-cat-names';
import { CommsMessage } from './comms.types';

const PRICE_MAP = {
  A: 55.5,
  B: 59.5,
  C: 62.75,
  D: 66,
  E: 69,
  F: 71.25,
};

@Injectable()
export class CommsService {
  constructor(private readonly users: UsersService) {}

  getDeliveryMessage(userId: string): CommsMessage {
    const user = this.users.findById(userId);

    if (!user) {
      const error = 'User not found';
      console.error(error); // Used in place of proper logging
      throw new NotFoundException(error);
    }

    const activeCats = user.cats.filter(
      ({ subscriptionActive }) => subscriptionActive,
    );
    const names = formatCatNames(activeCats.map(({ name }) => name));
    const totalPrice = activeCats.reduce(
      (sum, cat) => sum + PRICE_MAP[cat.pouchSize],
      0,
    );

    return {
      title: `Your next delivery for ${names}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${names}'s fresh food.`,
      totalPrice: parseFloat(totalPrice.toFixed(2)),
      freeGift: totalPrice > 120,
    };
  }
}
