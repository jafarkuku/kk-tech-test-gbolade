import type { DeliveryData } from '@kk/types';

import { fetchDeliveryData} from '../fetch-delivery-data';

const mockData: DeliveryData = {
  title: 'Your next delivery for Luna',
  message: 'Hey Alice! Your order is coming soon.',
  totalPrice: 99.99,
  freeGift: true,
};

describe('fetchDeliveryData', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns delivery data when fetch is successful', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchDeliveryData('123');
    expect(result).toEqual(mockData);
  });

  it('returns null when fetch response is not ok', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const result = await fetchDeliveryData('456');
    expect(result).toBeNull();
  });

  it('returns null and logs error when fetch throws', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    const result = await fetchDeliveryData('789');
    expect(result).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Failed to fetch delivery data:',
      expect.any(Error)
    );

    consoleSpy.mockRestore();
  });
});