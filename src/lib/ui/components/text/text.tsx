import React from 'react';
import { clsx } from 'clsx';
import { tv, VariantProps } from 'tailwind-variants';

import { As } from '../../types/react';
import { forwardRef } from '../../utils/react';
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

  const cn = clsx(className, text({ variant }));

  return <Box ref={ref} as={component} className={cn} {...rest} />;
});
