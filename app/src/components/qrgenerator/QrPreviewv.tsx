'use client';

import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import styles from '../styles/generator.module.css';
import { QrType } from '@/app/lib/constants';

interface QrPreviewProps {
  qrValue: string;
  qrType: QrType;
}

const QR_SIZE = 250;
const QR_LEVEL = 'H' as const; // High error correction level

export function QrPreview({ qrValue, qrType }: QrPreviewProps) {
  if (!qrValue) {
    return (
      <div className={styles.qrPlaceholder} role="status" aria-live="polite">
        <p>Selecciona una opción e ingresa los datos para generar tu QR</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={styles.qrPreviewContainer}
      aria-label={`Código QR de tipo ${qrType}`}
    >
      <QRCodeSVG
        value={qrValue}
        size={QR_SIZE}
        level={QR_LEVEL}
        includeMargin={true}
        bgColor="#ffffff"
        fgColor="#000000"
      />
    </motion.div>
  );
}

