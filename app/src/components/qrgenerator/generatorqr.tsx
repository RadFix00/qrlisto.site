'use client';

import { useState, useCallback } from 'react';
import styles from '../styles/generator.module.css';
import { QrOptionSelect } from './QrOptionSelect';
import { QrPreview } from './QrPreviewv';
import { QrDescargar } from './QrDescargar';
import { useAuth } from '@/app/lib/hooks/useAuth';
import { formatQrValue } from '@/app/lib/utils/qr-formatter';
import { QR_TYPES, QrType } from '@/app/lib/constants';

export default function Generatorqr() {
    const [selectedOption, setSelectedOption] = useState<QrType>(QR_TYPES.LINK);
    const [inputValue, setInputValue] = useState('');
    const [qrValue, setQrValue] = useState('');
    const { isAuthenticated, isLoading } = useAuth(true);

    const handleGenerate = useCallback(() => {
        const formattedValue = formatQrValue(selectedOption, inputValue);
        setQrValue(formattedValue);
    }, [selectedOption, inputValue]);

    if (isLoading) {
        return (
            <div className={styles.contentqr} id="generar">
                <div className={styles.qr}>
                    <p>Cargando...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className={styles.contentqr} id="generar">
            <div className={styles.qr}>
                <h2>Mas Facil Imposible</h2>
                <h1>Generador de QR's</h1>
                <div className={styles.square}>
                    <div>
                        <QrOptionSelect
                            selectedOption={selectedOption}
                            onOptionChange={setSelectedOption}
                            inputValue={inputValue}
                            onInputChange={setInputValue}
                            onGenerate={handleGenerate}
                        />
                    </div>

                    <div className="qrimage">
                        <h2>Código QR</h2>
                        <div className={styles.qrImageContainer}>
                            <QrPreview qrValue={qrValue} qrType={selectedOption} />
                        </div>
                        <QrDescargar qrValue={qrValue} disabled={!qrValue} />
                    </div>
                </div>
            </div>
        </div>
    );
}