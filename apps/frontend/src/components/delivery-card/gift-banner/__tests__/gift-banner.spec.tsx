import { render, screen } from '@testing-library/react';
import GiftBanner from '../gift-banner';

describe('GiftBanner', () => {
  it('renders with correct text', () => {
    render(<GiftBanner />);
    const banner = screen.getByText(/FREE GIFT/i);

    expect(screen.getByLabelText(/This order includes a free gift/i)).toBeInTheDocument();
    expect(banner).toBeInTheDocument();
  });
});
