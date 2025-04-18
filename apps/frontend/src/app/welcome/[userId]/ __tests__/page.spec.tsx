import { JSX } from 'react';
import { render, screen } from '@testing-library/react';
import { fetchDeliveryData } from '@/lib/fetch-delivery-data';
import { DeliveryData } from '@kk/types';

import WelcomePage from '../page';

jest.mock('@/lib/fetch-delivery-data', () => ({
  fetchDeliveryData: jest.fn(),
}));

jest.mock('@/components/delivery-card/delivery-card', () => ({
  __esModule: true,
  default: ({ data }: { data: DeliveryData }) => (
    <div data-testid="delivery-card">Mocked DeliveryCard for {data.title}</div>
  ),
}));

describe('WelcomePage', () => {
  const userId = 'test-user-id';

  it('renders error if fetchDeliveryData returns null', async () => {
    (fetchDeliveryData as jest.Mock).mockResolvedValue(null);
    const result = await WelcomePage({ params: Promise.resolve({ userId }) });
    render(result as JSX.Element);
    expect(screen.getByText(/Failed to load delivery data/i)).toBeInTheDocument();
  });

  it('renders the DeliveryCard with data if fetch is successful', async () => {
    (fetchDeliveryData as jest.Mock).mockResolvedValue({
      title: 'Your next delivery for Luna',
      message: 'Hello from the test!',
      totalPrice: 42.99,
      freeGift: true,
    });

    const result = await WelcomePage({ params: Promise.resolve({ userId }) });
    render(result as JSX.Element);
    expect(screen.getByTestId('delivery-card')).toHaveTextContent(
      'Mocked DeliveryCard for Your next delivery for Luna'
    );
  });
});
