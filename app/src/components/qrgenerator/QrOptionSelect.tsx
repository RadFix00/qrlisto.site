// src/components/qr-generator/QrOptionSelect.tsx

'use client';

import React, { useState } from "react";
import styles from '../styles/generator.module.css';
import { motion } from 'framer-motion';
import Image from "next/image";

// 1. Interfaz base para las opciones
interface QrOption {
    id: string;
    label: string;
    iconPath: string;
    alt: string;
}

// 2. Interfaz para las props del botón
interface ImageButtonProps {
    option: QrOption;
    isSelected: boolean;
    onSelect: (optionId: string) => void;
}

// 3. Componente ImageButton (tipado correctamente)
function ImageButton({ option, isSelected, onSelect }: ImageButtonProps) {
    return (
        <motion.div
            className={`${styles.imageButton} ${isSelected ? styles.selected : ''}`}
            onClick={() => onSelect(option.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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

// 4. Datos de las opciones
const qrOptions: QrOption[] = [
    { id: 'link', label: 'Enlace', iconPath: '/images/qrfondo.png', alt: 'Icono Enlace' },
    { id: 'text', label: 'Texto', iconPath: '/images/qrfondo.png', alt: 'Icono Texto' },
    { id: 'email', label: 'Email', iconPath: '/images/qrfondo.png', alt: 'Icono Email' },
    { id: 'phone', label: 'Teléfono', iconPath: '/images/qrfondo.png', alt: 'Icono Teléfono' },
    { id: 'sms', label: 'SMS', iconPath: '/images/qrfondo.png', alt: 'Icono SMS' },
    { id: 'wifi', label: 'WiFi', iconPath: '/images/qrfondo.png', alt: 'Icono WiFi' },
    { id: 'location', label: 'Ubicación', iconPath: '/images/qrfondo.png', alt: 'Icono Ubicación' },
    { id: 'event', label: 'Evento', iconPath: '/images/qrfondo.png', alt: 'Icono Evento' },
    { id: 'contact', label: 'Contacto', iconPath: '/images/qrfondo.png', alt: 'Icono Contacto' },
];


// 5. Componente Principal QrOptionSelect (Ahora SIN PROPS)
// Ya que maneja su propio estado, eliminamos las props conflictivas.
export function QrOptionSelect() {

    const [selectedOption, setSelectedOption] = useState(qrOptions[0].id); // Estado interno

    const handleSelectOption = (optionId: string) => {
        setSelectedOption(optionId);
        console.log("Opción QR seleccionada:", optionId);
    };
    
    return (
        <div>
            <h4>Selecciona qué va a contener tu QR</h4>

            <div>
                <div className={styles.selectionContainer} >
                    {qrOptions.map((option) => (
                        <ImageButton
                            key={option.id}
                            option={option}
                            isSelected={selectedOption === option.id}
                            onSelect={handleSelectOption}
                        />
                    ))}
                </div>
            </div>

            <motion.button
                // 🟢 Importante: Corregidas las propiedades de estilo con comas (,) en lugar de punto y coma (;)
                style={{ 
                    padding: '9px 30px', 
                    borderRadius: '18px', 
                    cursor: 'pointer', 
                    marginTop: '1em', 
                    background: 'linear-gradient(90deg, #f30000ff 0%, #690000ff 100%)',
                    color: '#ffffffff', 
                    border: 'none', 
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                animate={{ scale: 1.1, transition: { duration: 0.4, ease: "easeInOut"} }}
                whileHover={{ scale: 1.15 }}
            >
                Seleccionar
            </motion.button>
        </div>
    )
}