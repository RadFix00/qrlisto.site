'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/app/lib/hooks/useAuth';
import { ROUTES } from '@/app/lib/constants';
import './styles/navbar.css';

interface NavLink {
    label: string;
    href: string;
    external?: boolean;
}

const navLinks: NavLink[] = [
    { label: 'Inicio', href: ROUTES.HOME },
    { label: 'Generar QR', href: ROUTES.GENERATOR },
    { label: 'Precios', href: '#precios' },
    { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
    const { isAuthenticated, isLoading, logout } = useAuth();

    return (
        <header>
            <div className='content'>
                {/* Logo */}
                <div>
                    <Link href="/">
                        <Image
                            src='/images/LogoQrListo.png'
                            alt='Logo Empresa w'
                            width={170}
                            height={100}
                        />
                    </Link>
                </div>


                {/* Links */}
                <div>
                    <div>
                        <nav>
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className='link'>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Botones de acción */}
                <div className='button-to-action'>
                    {isLoading ? (
                        <span>Cargando...</span>
                    ) : isAuthenticated ? (
                        <>
                            <Link href={ROUTES.GENERATOR} className="nav-button">
                                Generar QR
                            </Link>
                            <button 
                                onClick={logout} 
                                className="nav-button logout-button"
                                aria-label="Cerrar sesión"
                            >
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <Link href={ROUTES.LOGIN} className="nav-button">
                            Iniciar Sesión
                        </Link>
                    )}
                </div>

            </div>
        </header>
    );
}