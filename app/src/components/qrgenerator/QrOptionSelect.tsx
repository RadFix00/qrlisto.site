'use client';

import styles from '../styles/generator.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { QrOption } from '@/app/lib/types';
import { QR_OPTIONS, QrType } from '@/app/lib/constants';
import { getQrPlaceholder, getQrInputLabel } from '@/app/lib/utils/qr-formatter';

interface ImageButtonProps {
    option: QrOption;
    isSelected: boolean;
    onSelect: (optionId: QrType) => void;
}

function ImageButton({ option, isSelected, onSelect }: ImageButtonProps) {
    return (
        <motion.div
            className={`${styles.imageButton} ${isSelected ? styles.selected : ''}`}
            onClick={() => onSelect(option.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelect(option.id);
                }
            }}
        >
            <Image
                src={option.iconPath}
                alt={option.alt}
                width={50}
                height={50}
            />
            <p>{option.label}</p>
        </motion.div>
    );
}

interface QrOptionSelectProps {
    selectedOption: QrType;
    onOptionChange: (optionId: QrType) => void;
    inputValue: string;
    onInputChange: (value: string) => void;
    onGenerate: () => void;
}

export function QrOptionSelect({ 
    selectedOption, 
    onOptionChange, 
    inputValue, 
    onInputChange,
    onGenerate 
}: QrOptionSelectProps) {
    const isInputValid = inputValue.trim().length > 0;
    
    return (
        <div>
            <h4>Selecciona qué va a contener tu QR</h4>

            <div>
                <div className={styles.selectionContainer} role="radiogroup" aria-label="Tipo de código QR">
                    {QR_OPTIONS.map((option) => (
                        <ImageButton
                            key={option.id}
                            option={option}
                            isSelected={selectedOption === option.id}
                            onSelect={onOptionChange}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="qr-input">{getQrInputLabel(selectedOption)}</label>
                <input
                    id="qr-input"
                    type="text"
                    value={inputValue}
                    onChange={(e) => onInputChange(e.target.value)}
                    placeholder={getQrPlaceholder(selectedOption)}
                    className={styles.qrInput}
                    aria-required="true"
                    aria-invalid={!isInputValid}
                />
            </div>

            <motion.button
                onClick={onGenerate}
                disabled={!isInputValid}
                aria-disabled={!isInputValid}
                style={{ 
                    padding: '9px 30px', 
                    borderRadius: '18px', 
                    cursor: isInputValid ? 'pointer' : 'not-allowed',
                    marginTop: '1em', 
                    background: isInputValid
                        ? 'linear-gradient(90deg, #f30000ff 0%, #690000ff 100%)'
                        : '#cccccc',
                    color: '#ffffffff', 
                    border: 'none', 
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    opacity: isInputValid ? 1 : 0.6
                }}
                animate={{ 
                    scale: isInputValid ? 1.1 : 1, 
                    transition: { duration: 0.4, ease: "easeInOut" } 
                }}
                whileHover={isInputValid ? { scale: 1.15 } : {}}
            >
                Generar QR
            </motion.button>
        </div>
    );
}