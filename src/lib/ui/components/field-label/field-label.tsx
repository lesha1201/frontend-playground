import { tv } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const fieldLabel = tv({
  base: 'truncate text-base font-bold',
});

/*-- Types --*/

export interface FieldLabelProps {}

/*-- Main --*/

export const FieldLabel = forwardRef<'label', FieldLabelProps>(
  function FieldLabel({ as = 'label', children, className, ...rest }, ref) {
    const cn = tclsx(fieldLabel(), className);

    return (
      <Box ref={ref} as={as} className={cn} {...rest}>
        {children}
      </Box>
    );
  },
);
