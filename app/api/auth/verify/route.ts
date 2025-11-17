import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { AUTH_COOKIE_NAME } from '@/app/lib/constants';
import { getJwtSecret } from '@/app/lib/config/auth.config';
import { AuthVerifyResponse } from '@/app/lib/types';

// Marcar como dinámico porque usa cookies
export const dynamic = 'force-dynamic';

interface JwtPayload {
  userId: string;
  email: string;
}

export async function GET(request: NextRequest): Promise<NextResponse<AuthVerifyResponse>> {
  try {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    try {
      const jwtSecret = getJwtSecret();
      const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
      
      return NextResponse.json({
        authenticated: true,
        user: {
          userId: decoded.userId,
          email: decoded.email,
        },
      });
    } catch (error) {
      // Token inválido o expirado
      return NextResponse.json(
        { authenticated: false, error: 'Token inválido' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error al verificar autenticación:', error);
    return NextResponse.json(
      { authenticated: false, error: 'Error al verificar autenticación' },
      { status: 500 }
    );
  }
}

