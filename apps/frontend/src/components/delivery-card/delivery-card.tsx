import Image from 'next/image';

import Button from '@/components/ui/button/button';
import { DeliveryData } from '@kk/types';

import GiftBanner from './gift-banner/gift-banner';

export default function DeliveryCard({ data }: { data: DeliveryData }) {
  return (
    <section
      aria-labelledby="delivery-title"
      className="relative flex flex-col md:flex-row bg-white rounded-sm shadow-md w-full max-w-3xl self-start"
    >
      {data.freeGift && <GiftBanner />}
      <div className="relative w-full md:w-[300px] flex justify-center md:justify-start">
        <div
          className={`
            absolute overflow-hidden shadow-md
            -top-7 w-13 h-13 rounded-full
            md:relative md:top-0 md:w-full md:h-auto md:rounded-tl-sm md:rounded-bl-sm md:rounded-none md:border-none
          `}
        >
          <Image
            src="https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg"
            alt="A picture of a cat"
            fill
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full md:flex-1 flex flex-col justify-between px-5 pt-9.5 md:pt-10 pb-6 text-center md:text-left">
        <div>
          <h1 id="delivery-title" className="text-green-700 font-bold text-base mb-2">
            {data.title}
          </h1>
          <p className="text-gray-600 mb-4 text-xs">{data.message}</p>
          <p className="text-gray-800 text-sm font-semibold mb-5.5 md:mb-10">
            Total price: £{data.totalPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4">
          <Button variant="primary">SEE DETAILS</Button>
          <Button variant="outline">EDIT DELIVERY</Button>
        </div>
      </div>
    </section>
  );
}
