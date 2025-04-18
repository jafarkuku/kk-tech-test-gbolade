import { DeliveryData } from "@kk/types";

export async function fetchDeliveryData(userId: string): Promise<DeliveryData | null> {
  try {
    const res = await fetch(
      `http://localhost:3001/comms/your-next-delivery/${userId}`,
      {
        cache: 'no-store',
        next: { revalidate: 0 }, // optional: ensure no caching
      }
    );

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to fetch delivery data:', error);
    return null;
  }
}