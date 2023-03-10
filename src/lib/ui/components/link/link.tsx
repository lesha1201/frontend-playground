import { tv } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const link = tv({
  base: 'text-primary-text hover:underline',
});

/*-- Types --*/

export interface LinkProps {}

/*-- Main --*/

export const Link = forwardRef<'a', LinkProps>(function Link(
  { as = 'a', children, className, ...rest },
  ref,
) {
  const cn = tclsx(link(), className);

  return (
    <Box ref={ref} as={as} className={cn} {...rest}>
      {children}
    </Box>
  );
});
