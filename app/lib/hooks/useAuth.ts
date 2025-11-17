/**
 * Hook personalizado para manejar autenticación
 */

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AuthVerifyResponse } from '../types';
import { API_ROUTES, ROUTES } from '../constants';

interface UseAuthReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: AuthVerifyResponse['user'];
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuth(redirectToLogin = false): UseAuthReturn {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<AuthVerifyResponse['user']>(undefined);
  const router = useRouter();

  const checkAuth = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_ROUTES.AUTH.VERIFY);
      const data: AuthVerifyResponse = await response.json();

      setIsAuthenticated(data.authenticated);
      setUser(data.user);

      if (!data.authenticated && redirectToLogin) {
        router.push(ROUTES.LOGIN);
      }
    } catch (error) {
      console.error('Error verificando autenticación:', error);
      setIsAuthenticated(false);
      setUser(undefined);
      if (redirectToLogin) {
        router.push(ROUTES.LOGIN);
      }
    } finally {
      setIsLoading(false);
    }
  }, [redirectToLogin, router]);

  const logout = useCallback(async () => {
    try {
      await fetch(API_ROUTES.AUTH.LOGOUT, { method: 'POST' });
      setIsAuthenticated(false);
      setUser(undefined);
      router.push(ROUTES.LOGIN);
      router.refresh();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }, [router]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    isAuthenticated,
    isLoading,
    user,
    checkAuth,
    logout,
  };
}

