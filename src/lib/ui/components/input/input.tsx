import { tv, VariantProps } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const input = tv({
  base: 'relative rounded-md border border-base-text-weak bg-transparent px-3 py-4 placeholder:text-base-text-weak focus:border-primary-text focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70',
  variants: {
    width: {
      full: 'w-full',
    },
    invalid: {
      true: 'border-error-border focus:border-error-border',
    },
  },
});

/*-- Types --*/

type InputVariants = VariantProps<typeof input>;

export interface InputProps extends InputVariants {}

/*-- Main --*/

export const Input = forwardRef<'input', InputProps>(function Input(
  { as = 'input', children, className, width, invalid, ...rest },
  ref,
) {
  const cn = tclsx(input({ width, invalid }), className);

  return (
    <Box ref={ref} as={as} className={cn} {...rest}>
      {children}
    </Box>
  );
});
