/**
 * Configuración de autenticación
 */

import { User } from '../types';

// En producción, esto debería venir de una base de datos
export const MOCK_USERS: Omit<User, 'name'>[] = [
  {
    id: '1',
    email: 'admin@qrlisto.com',
    password: '$2b$10$7BTOqQwtZsljCTMbgSMOr.VrmsqDsIj7lDlxMY2UPTWk2v.eCfhsC', // password: admin123
  },
];

export function getUserByEmail(email: string): User | null {
  const user = MOCK_USERS.find((u) => u.email === email);
  if (!user) return null;

  return {
    ...user,
    name: 'Administrador', // En producción esto vendría de la BD
  };
}

export function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret && process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET debe estar definido en producción');
  }
  return secret || 'tu-secret-key-muy-segura-cambiar-en-produccion';
}

