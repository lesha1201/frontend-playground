import { twJoin, twMerge } from 'tailwind-merge';
import { ClassNameValue } from 'tailwind-merge/dist/lib/tw-join';

export function tclsx(...inputs: ClassNameValue[]) {
  return twMerge(twJoin(...inputs));
}
