import { render, screen } from '@testing-library/react';
import GiftBanner from '../gift-banner';

describe('GiftBanner', () => {
  it('renders with correct text', () => {
    render(<GiftBanner />);

    expect(screen.getByLabelText(/This order includes a free gift/i)).toBeInTheDocument();
    expect(screen.getByText(/FREE GIFT/i)).toBeInTheDocument();
  });
});
