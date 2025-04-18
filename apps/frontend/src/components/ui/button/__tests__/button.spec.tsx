import { render, screen, fireEvent } from '@testing-library/react';

import Button from '../button';

describe('Button component', () => {
  it('renders the button', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
  });

  it('triggers onClick when clicked', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button', { name: /click me/i }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
