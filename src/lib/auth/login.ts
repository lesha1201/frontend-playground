import { apiFetch } from './fetch';

export type LoginPayload = {
  email: string;
  password: string;
};

export function login(credentials: LoginPayload) {
  return apiFetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
}
