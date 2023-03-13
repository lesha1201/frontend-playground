import 'server-only';

import { cookies } from 'next/headers';

export async function getCurrentUser() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token?.value) {
    return null;
  }

  return { email: token.value };
}
