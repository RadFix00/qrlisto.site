/**
 * Utilidades de validación
 */

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

/**
 * Valida un email
 */
export function isValidEmail(email: string): boolean {
  return emailRegex.test(email.trim());
}

/**
 * Valida una URL
 */
export function isValidUrl(url: string): boolean {
  return urlRegex.test(url.trim());
}

/**
 * Valida un número de teléfono (formato básico)
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return /^\+?[\d]{10,15}$/.test(cleaned);
}

/**
 * Sanitiza un string para prevenir XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remover tags HTML básicos
    .substring(0, 1000); // Limitar longitud
}

/**
 * Valida las credenciales de login
 */
export function validateLoginCredentials(
  email: string,
  password: string
): { valid: boolean; error?: string } {
  if (!email || !password) {
    return { valid: false, error: 'Email y contraseña son requeridos' };
  }

  if (!isValidEmail(email)) {
    return { valid: false, error: 'Email inválido' };
  }

  if (password.length < 6) {
    return { valid: false, error: 'La contraseña debe tener al menos 6 caracteres' };
  }

  return { valid: true };
}

