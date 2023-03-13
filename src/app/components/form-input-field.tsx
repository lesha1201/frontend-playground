import React from 'react';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { InputField } from '@/lib/ui';

type FormInputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> &
  React.ComponentProps<typeof InputField>;

/**
 * A wrapper of InputField that integrates it with React Hook Form.
 */
export function FormInputField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...rest
}: FormInputFieldProps<TFieldValues, TName>) {
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <InputField
      error={fieldState.error?.message}
      {...rest}
      {...field}
      inputRef={ref}
    />
  );
}
