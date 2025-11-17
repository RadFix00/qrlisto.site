/**
 * Utilidades para manejo de errores
 */

export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
}

/**
 * Crea un error estructurado
 */
export function createError(
  message: string,
  code?: string,
  statusCode?: number
): AppError {
  return {
    message,
    code,
    statusCode,
  };
}

/**
 * Maneja errores de API de forma consistente
 */
export function handleApiError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'object' && error !== null && 'error' in error) {
    return (error as { error: string }).error;
  }
  
  return 'Ha ocurrido un error inesperado. Por favor intenta de nuevo.';
}

