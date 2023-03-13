'use client';

import { FormEventHandler, useCallback, useState } from 'react';

import {
  Alert,
  AppleIcon,
  Button,
  FacebookIcon,
  GoogleIcon,
  IconButton,
  InputField,
  Link,
  Separator,
  TwitterIcon,
} from '@/lib/ui';

export function SignInForm() {
  const [error, setError] = useState('');

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(event => {
    event.preventDefault();

    setError(state => (state ? '' : 'Something went wrong'));
  }, []);

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="mb-10 flex w-full flex-col items-stretch gap-7">
        {error && <Alert status="error">{error}</Alert>}

        <div className="flex flex-col gap-7">
          <InputField
            width="full"
            type="email"
            label="Email"
            placeholder="Your email address"
            error={error}
          />
          <InputField
            width="full"
            type="password"
            label="Password"
            labelEndAddon={<Link href="#">Forgot password?</Link>}
            placeholder="********"
            error={error}
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-7">
        <Button width="full">Sign In</Button>

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
