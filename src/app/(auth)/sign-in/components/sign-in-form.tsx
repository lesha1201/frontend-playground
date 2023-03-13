'use client';

import { nopeResolver } from '@hookform/resolvers/nope';
import { useRouter } from 'next/navigation';
import * as Nope from 'nope-validator';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormInputField } from '@/app/components/form-input-field';
import { login, LoginPayload, RequestError } from '@/lib/auth';
import { invalidEmailMessage, requiredMessage } from '@/lib/form';
import {
  Alert,
  AppleIcon,
  Button,
  FacebookIcon,
  GoogleIcon,
  IconButton,
  Link,
  Separator,
  TwitterIcon,
} from '@/lib/ui';

const nextRoute = '/';

const signInFormSchema = Nope.object().shape({
  email: Nope.string().email(invalidEmailMessage).required(requiredMessage),
  password: Nope.string().required(requiredMessage),
});

export function SignInForm() {
  const router = useRouter();

  const [generalError, setGeneralError] = useState('');

  const { handleSubmit, control, formState } = useForm<LoginPayload>({
    resolver: nopeResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback(
    async (data: LoginPayload) => {
      setGeneralError('');

      try {
        await login(data);
        router.push(nextRoute);
      } catch (error) {
        if (error instanceof RequestError) {
          setGeneralError(error.data.message || 'Something went wrong.');
        }
      }
    },
    [router],
  );

  useEffect(() => {
    router.prefetch(nextRoute);
  }, [router]);

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-10 flex w-full flex-col items-stretch gap-7">
        {generalError && <Alert status="error">{generalError}</Alert>}

        <div className="flex flex-col gap-7">
          <FormInputField
            control={control}
            name="email"
            type="email"
            label="Email"
            placeholder="Your email address"
            width="full"
          />
          <FormInputField
            control={control}
            name="password"
            type="password"
            label="Password"
            labelEndAddon={<Link href="#">Forgot password?</Link>}
            placeholder="********"
            width="full"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-7">
        <Button type="submit" width="full" disabled={formState.isSubmitting}>
          Sign In
        </Button>

        <Separator>or sign in with</Separator>

        <div className="flex items-center gap-6">
          <IconButton type="button" color="neutral">
            <AppleIcon size="md" />
          </IconButton>
          <IconButton type="button" color="neutral">
            <FacebookIcon size="md" />
          </IconButton>
          <IconButton type="button" color="neutral">
            <GoogleIcon size="md" />
          </IconButton>
          <IconButton type="button" color="neutral">
            <TwitterIcon size="md" />
          </IconButton>
        </div>
      </div>
    </form>
  );
}
