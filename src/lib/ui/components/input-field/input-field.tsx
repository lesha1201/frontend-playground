import React, { useId } from 'react';

import { Field, FieldProps } from '../field';
import { FieldHint } from '../field-hint';
import { FieldLabel } from '../field-label';
import { Input, InputProps } from '../input';

/*-- Types --*/

export interface InputFieldProps
  extends Omit<InputProps, 'width' | 'invalid'>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'width'> {
  label?: React.ReactNode;
  labelEndAddon?: React.ReactNode;
  error?: boolean | React.ReactNode;
  hint?: React.ReactNode;
  width?: FieldProps['width'];
  inputRef?: React.ForwardedRef<HTMLInputElement>;
}

/*-- Main --*/

export const InputField = React.forwardRef<HTMLDivElement, InputFieldProps>(
  function InputField(
    { id, label, error, hint, width, labelEndAddon, inputRef, ...rest },
    ref,
  ) {
    const generatedId = useId();
    const hintId = useId();

    const isInvalid = !!error;
    const hintText = error && typeof error !== 'boolean' ? error : hint;

    const inputId = id || generatedId;
    const errorMessageId = isInvalid ? hintId : undefined;

    return (
      <Field ref={ref} width={width}>
        <div className="flex items-center justify-between gap-3">
          {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
          {labelEndAddon}
        </div>

        <Input
          ref={inputRef}
          aria-invalid={isInvalid}
          aria-errormessage={errorMessageId}
          {...rest}
          id={inputId}
          invalid={isInvalid}
        />

        {hintText && (
          <FieldHint id={errorMessageId} invalid={isInvalid}>
            {hintText}
          </FieldHint>
        )}
      </Field>
    );
  },
);
