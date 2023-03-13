import Image from 'next/image';

import promoImage from '../assets/promo-image.jpg';

export function PromoImage() {
  return (
    <figure>
      <Image
        className="aspect-[6/4] w-full rounded-2xl object-cover"
        src={promoImage}
        alt="Promotion image"
        placeholder="blur"
      />
      <figcaption className="mt-3 text-sm text-primary-surface-text-weak">
        Artwork by Gabriela Brzeska
      </figcaption>
    </figure>
  );
}
