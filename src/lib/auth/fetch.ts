const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export class RequestError<TData = unknown> extends Error {
  status: number;
  data: TData;

  constructor(status: number, data: TData) {
    super(`Request failed [${status}]`);

    this.status = status;
    this.data = data;
  }
}

export async function apiFetch(path: string, init?: RequestInit) {
  const response = await fetch(BASE_API_URL + path, init);

  const responseData = await response.json().catch(() => {});

  if (!response.ok) {
    throw new RequestError(response.status, responseData);
  }

  return responseData;
}
