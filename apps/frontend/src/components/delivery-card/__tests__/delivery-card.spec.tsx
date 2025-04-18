import { render, screen } from '@testing-library/react';
import DeliveryCard from '../delivery-card';
import { DeliveryData } from '@kk/types';

const baseData: DeliveryData = {
  title: 'Your next delivery for Luna',
  message: "Hey Alice! Your order for Luna's fresh food is coming soon.",
  totalPrice: 123.45,
  freeGift: false,
};

describe('DeliveryCard', () => {
  const renderComponent = (data: DeliveryData = baseData) => render(<DeliveryCard data={data} />);

  it('renders all essential content correctly', () => {
    renderComponent();

    expect(screen.getByRole('heading', { name: baseData.title })).toBeInTheDocument();
    expect(screen.getByText(baseData.message)).toBeInTheDocument();
    expect(screen.getByText(/Total price: £123.45/)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /SEE DETAILS/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /EDIT DELIVERY/i })).toBeInTheDocument();
  });

  it('provides an accessible section label using the title', () => {
    renderComponent();
    const section = screen.getByRole('region');
    const heading = screen.getByRole('heading', { name: baseData.title });

    expect(section).toHaveAttribute('aria-labelledby', 'delivery-title');
    expect(heading).toHaveAttribute('id', 'delivery-title');
  });

  it('provides a descriptive alt text for screen reader users', () => {
    renderComponent();

    expect(screen.getByAltText(/picture of a cat/i)).toBeInTheDocument();
  });

  it('conditionally renders the FREE GIFT banner', () => {
    // should not be present when freeGift is false
    renderComponent();
    expect(screen.queryByText(/FREE GIFT/i)).not.toBeInTheDocument();

    // should be present when freeGift is true
    const giftedData: DeliveryData = { ...baseData, freeGift: true };
    renderComponent(giftedData);
    expect(screen.getByText(/FREE GIFT/i)).toBeInTheDocument();
  });
});
