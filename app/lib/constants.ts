/**
 * Constantes de la aplicación
 */

export const AUTH_COOKIE_NAME = 'auth-token';
export const JWT_EXPIRES_IN = '7d';
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 días en segundos

export const QR_TYPES = {
  LINK: 'link',
  TEXT: 'text',
  EMAIL: 'email',
  PHONE: 'phone',
  SMS: 'sms',
  WIFI: 'wifi',
  LOCATION: 'location',
  EVENT: 'event',
  CONTACT: 'contact',
} as const;

export type QrType = typeof QR_TYPES[keyof typeof QR_TYPES];

export const QR_OPTIONS = [
  { id: QR_TYPES.LINK, label: 'Enlace', iconPath: '/images/qrfondo.png', alt: 'Icono Enlace' },
  { id: QR_TYPES.TEXT, label: 'Texto', iconPath: '/images/qrfondo.png', alt: 'Icono Texto' },
  { id: QR_TYPES.EMAIL, label: 'Email', iconPath: '/images/qrfondo.png', alt: 'Icono Email' },
  { id: QR_TYPES.PHONE, label: 'Teléfono', iconPath: '/images/qrfondo.png', alt: 'Icono Teléfono' },
  { id: QR_TYPES.SMS, label: 'SMS', iconPath: '/images/qrfondo.png', alt: 'Icono SMS' },
  { id: QR_TYPES.WIFI, label: 'WiFi', iconPath: '/images/qrfondo.png', alt: 'Icono WiFi' },
  { id: QR_TYPES.LOCATION, label: 'Ubicación', iconPath: '/images/qrfondo.png', alt: 'Icono Ubicación' },
  { id: QR_TYPES.EVENT, label: 'Evento', iconPath: '/images/qrfondo.png', alt: 'Icono Evento' },
  { id: QR_TYPES.CONTACT, label: 'Contacto', iconPath: '/images/qrfondo.png', alt: 'Icono Contacto' },
] as const;

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    VERIFY: '/api/auth/verify',
  },
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  GENERATOR: '#generar',
} as const;

