import { NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME } from '@/app/lib/constants';

// Marcar como dinámico porque usa cookies
export const dynamic = 'force-dynamic';

export async function POST(): Promise<NextResponse<{ success: boolean }>> {
  const response = NextResponse.json({ success: true });
  
  // Eliminar cookie
  response.cookies.set(AUTH_COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
  });

  return response;
}

