import React from 'react';
import { clsx } from 'clsx';
import { tv } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { Box } from '../box';

/*-- Types --*/

export interface ButtonProps {
  color?: 'primary';
  width?: 'full' | 'auto';
}

const button = tv({
  base: 'inline-flex items-center justify-center select-none whitespace-nowrap font-bold text-base bg-white text-black rounded-md py-4 px-6 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    color: {
      primary:
        'bg-primary-surface text-primary-surface-text-strong transition [&:not(:disabled)]:hover:bg-primary-surface-up [&:not(:disabled)]:active:bg-primary-surface-down',
    },
    width: {
      auto: 'w-auto',
      full: 'w-full',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

/*-- Main --*/

export const Button = forwardRef<'button', ButtonProps>(function Button(
  { as = 'button', children, className, color = 'primary', width, ...rest },
  ref,
) {
  const cn = clsx(
    className,
    button({
      color,
      width,
    }),
  );

  return (
    <Box ref={ref} as={as} className={cn} {...rest}>
      {children}
    </Box>
  );
});
