import { formatCatNames } from './format-cat-names';

describe('formatCatNames', () => {
  it('should return the name if only one cat', () => {
    expect(formatCatNames(['Whiskers'])).toBe('Whiskers');
  });

  it('should format two names with "and"', () => {
    expect(formatCatNames(['Milo', 'Luna'])).toBe('Milo and Luna');
  });

  it('should format three names with comma and "and"', () => {
    expect(formatCatNames(['Milo', 'Luna', 'Tiger'])).toBe(
      'Milo, Luna and Tiger',
    );
  });

  it('should format four or more names correctly', () => {
    expect(formatCatNames(['Milo', 'Luna', 'Tiger', 'Boots'])).toBe(
      'Milo, Luna, Tiger and Boots',
    );
  });

  it('should return empty string if no names provided', () => {
    expect(formatCatNames([])).toBe('');
  });
});
