'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAuth } from '@/app/lib/hooks/useAuth';
import { validateLoginCredentials, sanitizeInput } from '@/app/lib/utils/validation';
import { API_ROUTES, ROUTES } from '@/app/lib/constants';
import { LoginCredentials, ApiError } from '@/app/lib/types';
import './login.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  // Redirigir si ya está autenticado
  if (isAuthenticated) {
    router.push(ROUTES.HOME);
    return null;
  }

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    // Validar antes de enviar
    const sanitizedEmail = sanitizeInput(email);
    const validation = validateLoginCredentials(sanitizedEmail, password);
    
    if (!validation.valid) {
      setError(validation.error || 'Credenciales inválidas');
      return;
    }

    setLoading(true);

    try {
      const credentials: LoginCredentials = {
        email: sanitizedEmail,
        password,
      };

      const response = await fetch(API_ROUTES.AUTH.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        router.push(ROUTES.HOME);
        router.refresh();
      } else {
        const apiError = data as ApiError;
        setError(apiError.error || 'Error al iniciar sesión');
      }
    } catch (error) {
      setError('Error de conexión. Por favor intenta de nuevo.');
      console.error('Error en login:', error);
    } finally {
      setLoading(false);
    }
  }, [email, password, router]);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Image
            src="/images/LogoQrListo.png"
            alt="QrListo Logo"
            width={200}
            height={120}
            priority
          />
          <h1>Iniciar Sesión</h1>
          <p>Accede a tu cuenta para generar códigos QR</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              disabled={loading}
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="login-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </motion.button>
        </form>

        <div className="login-footer">
          <p className="demo-credentials">
            <strong>Credenciales de prueba:</strong><br />
            Email: admin@qrlisto.com<br />
            Contraseña: admin123
          </p>
        </div>
      </div>
    </div>
  );
}

