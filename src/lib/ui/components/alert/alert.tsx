import { tv, VariantProps } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const alert = tv({
  base: 'rounded-md border p-4 text-base font-normal',
  variants: {
    status: {
      error:
        'border-error-border-subtle bg-error-surface-subtle text-error-text',
    },
  },
  defaultVariants: {
    status: 'error',
  },
});

/*-- Types --*/

type AlertVariants = VariantProps<typeof alert>;

export interface AlertProps extends AlertVariants {}

/*-- Main --*/

export const Alert = forwardRef<'div', AlertProps>(function Alert(
  { as = 'div', children, className, status, ...rest },
  ref,
) {
  const cn = tclsx(alert({ status }), className);

  return (
    <Box ref={ref} as={as} className={cn} {...rest}>
      {children}
    </Box>
  );
});
