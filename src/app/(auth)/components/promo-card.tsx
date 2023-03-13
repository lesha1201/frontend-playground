import { Logo } from '@/app/components';
import { PromoImage } from './promo-image';
import { PromoText } from './promo-text';
import { PromoTitle } from './promo-title';

export function PromoCard() {
  return (
    <div className="hidden w-full rounded-3xl bg-primary-surface p-10 text-primary-surface-text-strong [max-width:38rem] lg:flex lg:flex-col lg:items-start lg:gap-28">
      <Logo className="h-7" />

      <div className="flex flex-col gap-10">
        <PromoTitle>
          Find your
          <br />
          inspiration.
        </PromoTitle>

        <PromoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue
          massa, varius eget aliquet porttitor.
        </PromoText>

        <PromoImage />
      </div>
    </div>
  );
}
