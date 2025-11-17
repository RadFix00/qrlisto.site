'use client';

import { useState, useCallback } from 'react';
import QRCode from 'qrcode';
import { motion } from 'framer-motion';

interface QrDescargarProps {
  qrValue: string;
  disabled?: boolean;
}

const QR_DOWNLOAD_SIZE = 500;
const QR_MARGIN = 2;

export function QrDescargar({ qrValue, disabled = false }: QrDescargarProps) {
  const [downloading, setDownloading] = useState(false);
  const isDisabled = disabled || downloading || !qrValue;

  const handleDownload = useCallback(async () => {
    if (!qrValue || disabled) return;

    setDownloading(true);
    try {
      const canvas = document.createElement('canvas');
      await QRCode.toCanvas(canvas, qrValue, {
        width: QR_DOWNLOAD_SIZE,
        margin: QR_MARGIN,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
        errorCorrectionLevel: 'H',
      });

      // Crear un enlace de descarga
      const link = document.createElement('a');
      link.download = `qr-code-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloading(false);
    } catch (error) {
      console.error('Error al descargar QR:', error);
      setDownloading(false);
    }
  }, [qrValue, disabled]);

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label="Descargar código QR"
      style={{
        padding: '9px 30px',
        borderRadius: '18px',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        marginTop: '1em',
        background: isDisabled
          ? '#cccccc'
          : 'linear-gradient(90deg, #f30000ff 0%, #690000ff 100%)',
        color: '#ffffffff',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        opacity: isDisabled ? 0.6 : 1,
      }}
      animate={{ 
        scale: isDisabled ? 1 : 1.4, 
        transition: { duration: 0.4, ease: "easeInOut" } 
      }}
      whileHover={isDisabled ? {} : { scale: 1.6 }}
      whileTap={isDisabled ? {} : { scale: 1.2 }}
    >
      {downloading ? 'Descargando...' : 'Descargar'}
    </motion.button>
  );
}

