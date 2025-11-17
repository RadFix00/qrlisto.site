/**
 * Utilidades para formatear valores de QR
 */

import { QrType, QR_TYPES } from '../constants';

/**
 * Formatea un valor según el tipo de QR seleccionado
 */
export function formatQrValue(type: QrType, value: string): string {
  if (!value.trim()) return '';

  const sanitized = value.trim();

  switch (type) {
    case QR_TYPES.LINK:
      return sanitized.startsWith('http://') || sanitized.startsWith('https://')
        ? sanitized
        : `https://${sanitized}`;

    case QR_TYPES.EMAIL:
      return `mailto:${sanitized}`;

    case QR_TYPES.PHONE:
      return `tel:${sanitized}`;

    case QR_TYPES.SMS:
      return `sms:${sanitized}`;

    case QR_TYPES.TEXT:
    case QR_TYPES.WIFI:
    case QR_TYPES.LOCATION:
    case QR_TYPES.EVENT:
    case QR_TYPES.CONTACT:
    default:
      return sanitized;
  }
}

/**
 * Obtiene el placeholder según el tipo de QR
 */
export function getQrPlaceholder(type: QrType): string {
  switch (type) {
    case QR_TYPES.LINK:
      return 'https://ejemplo.com';
    case QR_TYPES.TEXT:
      return 'Ingresa tu texto aquí';
    case QR_TYPES.EMAIL:
      return 'correo@ejemplo.com';
    case QR_TYPES.PHONE:
      return '+1234567890';
    case QR_TYPES.SMS:
      return '+1234567890';
    case QR_TYPES.WIFI:
      return 'WIFI:T:WPA;S:NombreRed;P:Contraseña;;';
    case QR_TYPES.LOCATION:
      return 'Latitud,Longitud (ej: 40.7128,-74.0060)';
    case QR_TYPES.EVENT:
      return 'Título del evento';
    case QR_TYPES.CONTACT:
      return 'Nombre, Teléfono, Email';
    default:
      return 'Ingresa los datos';
  }
}

/**
 * Obtiene la etiqueta del input según el tipo de QR
 */
export function getQrInputLabel(type: QrType): string {
  switch (type) {
    case QR_TYPES.LINK:
      return 'URL del enlace';
    case QR_TYPES.TEXT:
      return 'Texto';
    case QR_TYPES.EMAIL:
      return 'Dirección de correo';
    case QR_TYPES.PHONE:
      return 'Número de teléfono';
    case QR_TYPES.SMS:
      return 'Número de teléfono';
    case QR_TYPES.WIFI:
      return 'Datos de WiFi (SSID:Contraseña)';
    case QR_TYPES.LOCATION:
      return 'Coordenadas';
    case QR_TYPES.EVENT:
      return 'Información del evento';
    case QR_TYPES.CONTACT:
      return 'Datos de contacto';
    default:
      return 'Datos';
  }
}

