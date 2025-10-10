'use client';

import Image from "next/image";
import styles from '../styles/generator.module.css';
import { motion } from 'framer-motion';
import  {QrOptionSelect} from './QrOptionSelect';



export default function Generatorqr() {

    return (
        <div className={styles.contentqr} id="generar" >
            <div className={styles.qr}>
                <h2>Mas Facil Imposible</h2>
                <h1>Generador de QR's</h1>
                <div className={styles.square}>
                    <div >
                        <QrOptionSelect/>  
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