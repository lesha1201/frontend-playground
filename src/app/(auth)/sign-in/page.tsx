import { Text } from '@/lib/ui';
import { SignInForm } from './components/sign-in-form';

export const metadata = {
  title: 'Sign In',
};

export default function SignInPage() {
  return (
    <>
      <Text className="mb-14" variant="h1">
        Sign In
      </Text>

      <SignInForm />
    </>
  );
}
