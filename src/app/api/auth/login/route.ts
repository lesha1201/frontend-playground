import { NextRequest, NextResponse } from 'next/server';

const VALID_PASSWORD = 'qwerty123';

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (data.password !== VALID_PASSWORD) {
    return NextResponse.json(
      {
        code: 'invalid-credentials',
        message: `Forgot your password? Try "${VALID_PASSWORD}".`,
      },
      { status: 400 },
    );
  }

  const response = NextResponse.json({ email: data.email });

  response.cookies.set('token', data.email);

  return response;
}
