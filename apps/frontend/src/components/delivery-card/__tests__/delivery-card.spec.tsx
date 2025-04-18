import { render, screen } from '@testing-library/react';
import DeliveryCard from '../delivery-card';
import { DeliveryData } from '@kk/types';

const data: DeliveryData = {
  title: 'Your next delivery for Luna',
  message: "Hey Alice! Your order for Luna's fresh food is coming soon.",
  totalPrice: 123.45,
  freeGift: false,
};

describe('DeliveryCard', () => {
  it('renders title, message, and buttons correctly', () => {
    render(<DeliveryCard data={data} />);

    expect(screen.getByText(data.title)).toBeInTheDocument();
    expect(screen.getByText(data.message)).toBeInTheDocument();
    expect(screen.getByText(/Total price: £123.45/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /SEE DETAILS/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /EDIT DELIVERY/i })).toBeInTheDocument();
  });

  it('renders FREE GIFT banner when freeGift is true', () => {
    const giftedData: DeliveryData = { ...data, freeGift: true };
    render(<DeliveryCard data={giftedData} />);

    expect(screen.getByText(/FREE GIFT/i)).toBeInTheDocument();
  });

  it('does NOT render FREE GIFT banner when freeGift is false', () => {
    render(<DeliveryCard data={data} />);
    expect(screen.queryByText(/FREE GIFT/i)).not.toBeInTheDocument();
  });
});
