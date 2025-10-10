import Image from "next/image";
import './page.css';
import Hero from './src/components/hero';
import Generatorqr from './src/components/qrgenerator/generatorqr';

export default function Home() {
  return (
    <main>
      {/* Section Hero */}
      <Hero />

      {/* Section Generador QR */}
      <Generatorqr />

      
    </main>
  );
}
