import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({});

  response.cookies.set('token', '', { maxAge: 0, expires: new Date(0) });

  return response;
}
