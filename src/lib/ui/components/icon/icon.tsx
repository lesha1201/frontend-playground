import { tv, VariantProps } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const icon = tv({
  base: 'inline-flex shrink-0 w-[1em] h-[1em]',
  variants: {
    size: {
      md: 'text-2xl',
    },
  },
});

/*-- Types --*/

type IconVariants = VariantProps<typeof icon>;

export interface IconProps extends IconVariants {}

/*-- Main --*/

export const Icon = forwardRef<'span', IconProps>(function Icon(
  { as = 'span', className, children, size, ...rest },
  ref,
) {
  const cn = tclsx(icon({ size }), className);

  return (
    <Box ref={ref} as={as} className={cn} {...rest}>
      {children}
    </Box>
  );
});
