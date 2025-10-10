'use client';

import Image from "next/image";
import styles from './generator.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const qrOptions = [
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

function ImageButton({ option, isSelected, onSelect }) {
    // Usaremos un div o button simple para el botón
    return (
        <motion.div
            className={`${styles.imageButton} ${isSelected ? styles.selected : ''}`}
            onClick={() => onSelect(option.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Si estás usando la etiqueta Image de Next.js */}
            <Image
                src={option.iconPath}
                alt={option.alt}
                width={50} // Ajusta el tamaño según tu CSS
                height={50} // Ajusta el tamaño según tu CSS
            />
            <p>{option.label}</p>
        </motion.div>
    );
}

export default function Generatorqr() {

    const [selectedOption, setSelectedOption] = useState(qrOptions[0].id); // Estado para la opción seleccionada

    const handleSelectOption = (optionId) => {
        setSelectedOption(optionId);
        console.log("Opción QR seleccionada:", optionId);
        // Aquí podrías agregar más lógica, como mostrar el input de la segunda sección
    };



    return (
        <div className={styles.contentqr} id="generar" >
            <div className={styles.qr}>
                <h2>Mas Facil Imposible</h2>
                <h1>Generador de QR's</h1>
                <div className={styles.square}>
                    <div >
                        <div>
                            <h4>Selecciona que va a contener tu QR</h4>

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
                                style={{ padding: '9px 30px;', 
                                        borderRadius: '18px', 
                                        cursor: 'pointer', 
                                        marginTop: '1em', 
                                        background: 'linear-gradient(90deg, #f30000ff 0%, #690000ff 100%)',
                                        color: '#ffffffff', 
                                        border: 'none', 
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                        
                                    }}
                                animate={{ scale: 1.1, transition: { duration: 0.4, ease: "easeInOut"} }}
                                whileHover={{ scale: 1.15 }}  // Cuando el mouse pasa por encima
                                >
                                Seleccionar
                            </motion.button>
                        </div>


                   
                       {/*     <div>
                            <h4>Seleccion en base de la primera</h4>
                            <input type="text" 
                                placeholder="Ingresa tu enlace aqui"
                            />
                            <motion.button
                                style={{ padding: '9px 30px;', 
                                        borderRadius: '18px', 
                                        cursor: 'pointer', 
                                        marginTop: '1em', 
                                        background: 'linear-gradient(90deg, #f30000ff 0%, #690000ff 100%)',
                                        color: '#ffffffff', 
                                        border: 'none', 
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                        
                                    }}
                                animate={{ scale: 1.1, transition: { duration: 0.4, ease: "easeInOut"} }}
                                whileHover={{ scale: 1.15 }}  // Cuando el mouse pasa por encima
                                >
                                Siguiente
                            </motion.button>
                        </div>
                        <div>
                            <h4>Diseño del QR</h4>


                            <motion.button
                                style={{ padding: '9px 30px;', 
                                        borderRadius: '18px', 
                                        cursor: 'pointer', 
                                        marginTop: '1em', 
                                        background: 'linear-gradient(90deg, #f30000ff 0%, #690000ff 100%)',
                                        color: '#ffffffff', 
                                        border: 'none', 
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                        
                                    }}
                                animate={{ scale: 1.1, transition: { duration: 0.4, ease: "easeInOut"} }}
                                whileHover={{ scale: 1.15 }}  // Cuando el mouse pasa por encima
                                >
                                Generar QR
                            </motion.button>
                        </div>
                    */}     
                    </div>

                    <div className="qrimage">
                        <h2>Codigo QR</h2>
                        <div>
                            <Image
                                src="/images/qrfondo.png"
                                alt="Logo Empresa w"
                                width={250}
                                height={250}
                            />
                        </div>
                        <motion.button
                    
                            style={{ padding: '9px 30px;', 
                                    borderRadius: '18px', 
                                    cursor: 'pointer', 
                                    marginTop: '1em', 
                                    background: 'linear-gradient(90deg, #f30000ff 0%, #690000ff 100%)',
                                    color: '#ffffffff', 
                                    border: 'none', 
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                    
                                }}
                            animate={{ scale: 1.4, transition: { duration: 0.4, ease: "easeInOut"} }}
                            whileHover={{ scale: 1.6 }}  // Cuando el mouse pasa por encima
                            >
                            Descargar
                        </motion.button>
                    </div>

                </div>
                
            </div>
        </div>  
    )
}