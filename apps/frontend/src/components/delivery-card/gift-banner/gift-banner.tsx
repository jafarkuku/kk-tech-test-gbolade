export default function GiftBanner() {
  return (
    <div
      aria-label="This order includes a free gift"
      className={`
        absolute px-3 py-1 bg-pink-300 text-xs text-purple-900 font-bold
        bottom-[-12px] left-1/2 -translate-x-1/2 -rotate-[4.75deg]
        md:bottom-auto md:left-auto md:translate-x-0 md:top-[-10px] md:right-[-12px] md:rotate-[8.61deg]
      `}
    >
      FREE GIFT
    </div>
  );
}
