/**
 * A component that provides some predefined variants. We only use that
 * component where we need some variant from it. In other cases, we don't
 * really need to use it since we have Tailwind and can easily style via it
 * (size, colors, weight, etc.).
 *
 * Examples:
 * // We use `Text` because we want to have styles from `h1` variant.
 * <Text variant="h1">Hello, World!</Text>
 *
 * // We want that element to inherit all text styles from the parent
 * // but to have bold font. We don't need to use `Text` here.
 * <div className="font-bold">Hello, World!</div>
 */

import { tv, VariantProps } from 'tailwind-variants';

import { As } from '../../types/react';
import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const text = tv({
  variants: {
    variant: {
      h1: 'text-5xl font-semibold leading-tight',
      h2: 'text-4xl font-semibold',
      h3: 'text-3xl font-semibold',
      h4: 'text-2xl font-semibold',
      h5: 'text-xl font-semibold',
      h6: 'text-lg font-normal',
      body1: 'text-base font-normal',
      body2: 'text-sm font-normal',
      caption: 'text-xs font-normal',
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
});

/*-- Types --*/

type TextVariants = VariantProps<typeof text>;

type TextVariant = Extract<TextVariants['variant'], string>;

export interface TextProps {
  variant?: TextVariant;
}

/*-- Main --*/

const defaultVariantMapping: Record<TextVariant, As> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
};

export const Text = forwardRef<'p', TextProps>(function Text(
  { as, className, variant = 'body1', ...rest },
  ref,
) {
  const component = as || defaultVariantMapping[variant] || 'p';

  const cn = tclsx(text({ variant }), className);

  return <Box ref={ref} as={component} className={cn} {...rest} />;
});
