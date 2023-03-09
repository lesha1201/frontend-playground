import { tv, VariantProps } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const button = tv({
  base: 'inline-flex items-center justify-center select-none whitespace-nowrap font-bold text-base bg-white text-black rounded-md py-4 px-6 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    color: {
      primary:
        'bg-primary-surface text-primary-surface-text-strong transition [&:not(:disabled)]:hover:bg-primary-surface-up [&:not(:disabled)]:active:bg-primary-surface-down',
      neutral:
        'bg-neutral-surface text-neutral-surface-text-strong transition [&:not(:disabled)]:hover:bg-neutral-surface-up [&:not(:disabled)]:active:bg-neutral-surface-down',
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

/*-- Types --*/

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps extends ButtonVariants {}

/*-- Main --*/

export const Button = forwardRef<'button', ButtonProps>(function Button(
  { as = 'button', children, className, color = 'primary', width, ...rest },
  ref,
) {
  const cn = tclsx(
    button({
      color,
      width,
    }),
    className,
  );

  return (
    <Box ref={ref} as={as} className={cn} {...rest}>
      {children}
    </Box>
  );
});
