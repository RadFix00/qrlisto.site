import Image from "next/image";
import Navbar from "./src/components/navbar";
import './globals.css';

export default function Home() {
  return (

    <div>

      <Navbar />
      
      <h1>Genera tu QR Free!</h1>

      <div style={{ backgroundColor: "black", padding: "20px", marginTop: "20px" }}>
        <button>
          generar QR
        </button>
        
      </div>
      
    </div>
  );
}
