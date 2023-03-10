import { tv, VariantProps } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const field = tv({
  base: 'flex flex-col gap-2',

  variants: {
    width: {
      full: 'w-full',
    },
  },
});

/*-- Types --*/

type FieldVariants = VariantProps<typeof field>;

export interface FieldProps extends FieldVariants {}

/*-- Main --*/

export const Field = forwardRef<'div', FieldProps>(function Field(
  { as = 'div', children, className, width, ...rest },
  ref,
) {
  const cn = tclsx(field({ width }), className);

  return (
    <Box ref={ref} as={as} className={cn} {...rest}>
      {children}
    </Box>
  );
});
