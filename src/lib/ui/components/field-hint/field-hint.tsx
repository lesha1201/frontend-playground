import { tv, VariantProps } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const fieldHint = tv({
  base: 'text-sm',
  variants: {
    invalid: {
      true: 'text-error-text',
    },
  },
});

/*-- Types --*/

type FieldHintVariants = VariantProps<typeof fieldHint>;

export interface FieldHintProps extends FieldHintVariants {}

/*-- Main --*/

export const FieldHint = forwardRef<'div', FieldHintProps>(function FieldHint(
  { as = 'div', children, className, invalid, ...rest },
  ref,
) {
  const cn = tclsx(fieldHint({ invalid }), className);

  return (
    <Box ref={ref} as={as} className={cn} {...rest}>
      {children}
    </Box>
  );
});
