import { tv } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const separator = tv({
  base: 'flex w-full items-center gap-2 text-base-text-weak',
  variants: {
    hasText: {
      true: 'before:border-t before:border-current before:grow after:border-t after:border-current after:grow',
      false: 'border-t border-current',
    },
  },
});

/*-- Types --*/

export interface SeparatorProps {}

/*-- Main --*/

export const Separator = forwardRef<'div', SeparatorProps>(function Separator(
  { as = 'div', children, className, ...rest },
  ref,
) {
  const cn = tclsx(separator({ hasText: !!children }), className);

  return (
    <Box ref={ref} as={as} className={cn} role="separator" {...rest}>
      {children && <span>{children}</span>}
    </Box>
  );
});
