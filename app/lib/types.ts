/**
 * Tipos e interfaces compartidas
 */

import { QrType } from './constants';

export interface User {
  id: string;
  email: string;
  name: string;
  password?: string; // Solo en el servidor, nunca en el cliente
}

export interface AuthResponse {
  success: boolean;
  user: Omit<User, 'password'>;
  token?: string;
}

export interface AuthVerifyResponse {
  authenticated: boolean;
  user?: {
    userId: string;
    email: string;
  };
  error?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface QrOption {
  id: QrType;
  label: string;
  iconPath: string;
  alt: string;
}

export interface QrFormData {
  type: QrType;
  value: string;
}

export interface ApiError {
  error: string;
  status?: number;
}

