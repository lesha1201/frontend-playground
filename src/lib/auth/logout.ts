import { apiFetch } from './fetch';

export function logout() {
  return apiFetch('/api/auth/logout', {
    method: 'POST',
  });
}
