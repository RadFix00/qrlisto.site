'use client';

import { headers } from 'next/headers';
import Link from 'next/link';
import { useState } from 'react';
import './navbar.css';

interface NavLink {
    label: string;
    href: string;
    external?: boolean;
}

const navLinks: NavLink[] = [
    {label: 'Inicio', href: '/' },
    {label: 'Generar QR', href: '/generar' },
    {label: 'Precios', href: '/precios' },
    {label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            {/* Logo */}
            <div>
            </div>


            {/* Links */}
            <div className='content-links' >
                <div>
                    <nav>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link  href={link.href} onClick={() => setIsMenuOpen(false)} className='link'>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Botton To Action */}
            <div>

            </div>
        </header>
    );
}