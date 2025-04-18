import { fetchDeliveryData } from '@/lib/fetch-delivery-data';
import DeliveryCard from '@/components/delivery-card/delivery-card';
import { DeliveryData } from '@kk/types';

export type WelcomePageProps = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function WelcomePage({ params }: WelcomePageProps) {
  const { userId } = await params;

  const data: DeliveryData | null = await fetchDeliveryData(userId);

  if (!data) {
    return <div className="p-8 text-red-500">Failed to load delivery data.</div>;
  }

  return (
    <div className="flex justify-center pt-20 p-6 bg-gray-50 min-h-screen">
      <DeliveryCard data={data} />
    </div>
  );
}
