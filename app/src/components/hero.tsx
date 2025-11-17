'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/hero.module.css';
import ParticlesBackground from './backhero';
import { motion } from 'framer-motion';
import { ROUTES } from '@/app/lib/constants';

export default function Hero() {
    return (
        <div>
            <div className={styles.particles}>
                <ParticlesBackground />
            </div>
            
            <div className={styles.hero}>
                <Image
                    src="/images/LogoQrListo.png"
                    alt="Logo QrListo"
                    width={250}
                    height={150}
                    priority
                />
                <h1 className={styles.texthero}>
                    Códigos QR al instante, sin complicaciones: crea, comparte 
                    y conecta en segundos.
                </h1>

                <Link href={ROUTES.GENERATOR} aria-label="Ir al generador de QR">
                    <motion.button
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
                        animate={{ scale: 1.4, transition: { duration: 0.4, ease: "easeInOut"} }}
                        whileHover={{ scale: 1.6 }}
                        aria-label="Generar código QR"
                    >
                        GENERAR QR
                    </motion.button>
                </Link>
            </div>
        </div>
    );
}


    