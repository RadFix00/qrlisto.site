'use client';

import Image from "next/image";
import styles from './generator.module.css';

export default function Generatorqr() {
    return (
        <div className={styles.contentqr}>
            <div>
                <h2>QrListo</h2>
                <h1>Generador de QR's</h1>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                    <div>
                        <h3>Crea tu QR en base a un enlace</h3>
                        <input type="text" 
                            placeholder="Ingresa tu enlace aqui"
                        />
                        <button>Generar QR</button>
                    </div>
                    <div>
                        <h3>Crea tu QR en base a un enlace</h3>
                        <input type="text" 
                            placeholder="Ingresa tu enlace aqui"
                        />
                        <button>Generar QR</button>
                    </div>
                    <div>
                        <h3>Crea tu QR en base a un enlace</h3>
                        <input type="text" 
                            placeholder="Ingresa tu enlace aqui"
                        />
                        <button>Generar QR</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}