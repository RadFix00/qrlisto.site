import Image from "next/image";
import './page.css';

export default function Home() {
  return (
    <main>
      {/* Section Hero */}
      <div className="hero">
        <Image
          src="/images/LogoQrListo.png"
          alt="Logo Empresa w"
          width={200}
          height={200}
        />
        <h1 className="texthero">Códigos QR al
           instante, sin complicaciones: crea, comparte 
           y conecta en segundos.
        </h1>

         <form className="search-form">
          <input
            type="text"
            placeholder="Ingresa el sitio..."
            className="search-input"
            aria-label="Barra de búsqueda del sitio"
          />
         
          <button type="submit" className="search-button" aria-label="Buscar">
            🔍
          </button>
        </form>


      </div>
    </main>
  );
}
