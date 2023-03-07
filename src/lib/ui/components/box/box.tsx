import React from 'react';

import { forwardRef } from '../../utils/react';

export interface BoxProps {}

export const Box = forwardRef<'div', BoxProps>(function Box(
  { as: Component = 'div', ...rest },
  ref,
) {
  return <Component ref={ref} {...rest} />;
});
