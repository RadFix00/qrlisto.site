import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getUserByEmail, getJwtSecret } from '@/app/lib/config/auth.config';
import { validateLoginCredentials } from '@/app/lib/utils/validation';
import { AUTH_COOKIE_NAME, COOKIE_MAX_AGE, JWT_EXPIRES_IN } from '@/app/lib/constants';
import { AuthResponse, LoginCredentials } from '@/app/lib/types';

// Marcar como dinámico porque usa cookies
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest): Promise<NextResponse<AuthResponse | { error: string }>> {
  try {
    const body: LoginCredentials = await request.json();
    const { email, password } = body;

    // Validar credenciales
    const validation = validateLoginCredentials(email, password);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error || 'Credenciales inválidas' },
        { status: 400 }
      );
    }

    // Buscar usuario
    const user = getUserByEmail(email);
    
    if (!user || !user.password) {
      // No revelar si el usuario existe o no por seguridad
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Verificar contraseña usando bcrypt
    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Generar token JWT
    const jwtSecret = getJwtSecret();
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      jwtSecret,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Crear respuesta con cookie
    const response = NextResponse.json(
      { 
        success: true, 
        user: { id: user.id, email: user.email, name: user.name },
        token 
      },
      { status: 200 }
    );

    // Establecer cookie HTTP-only
    response.cookies.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: COOKIE_MAX_AGE,
    });

    return response;
  } catch (error) {
    console.error('Error en login:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

