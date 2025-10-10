'use client';

import Image from "next/image";
import styles from './hero.module.css';
import ParticlesBackground from './backhero';
import { motion } from 'framer-motion';

export default function Hero() {
    return (

        <div>
            <div className={styles.particles}>
                <ParticlesBackground />
            </div>
            
            <div className={styles.hero}>
                <Image
                src="/images/LogoQrListo.png"
                alt="Logo Empresa w"
                width={250}
                height={150}
                />
                <h1 className={styles.texthero}>Códigos QR al
                instante, sin complicaciones: crea, comparte 
                y conecta en segundos.
                </h1>

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
                    GENERAR QR
                </motion.button>

            </div>

        </div>
       
    )
}


    