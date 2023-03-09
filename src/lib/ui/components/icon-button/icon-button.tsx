import { tv } from 'tailwind-variants';

import { forwardRef } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Button, ButtonProps } from '../button';

/*-- Styles --*/

const iconButton = tv({
  base: 'p-4',
});

/*-- Types --*/

export interface IconButtonProps extends ButtonProps {}

/*-- Main --*/

export const IconButton = forwardRef<'button', IconButtonProps>(
  function IconButton({ as = 'button', children, className, ...rest }, ref) {
    const cn = tclsx(iconButton(), className);

    return (
      <Button ref={ref} as={as} className={cn} {...rest}>
        {children}
      </Button>
    );
  },
);
