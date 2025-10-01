// components/ParticlesBackground.tsx

"use client"; // Es necesario para usar hooks y manejar la inicialización del canvas

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // El paquete ligero que instalamos

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // 1. Inicializa el motor de tsparticles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Usamos el paquete "slim" para cargar solo las funciones básicas
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  // 2. Define la configuración de tus partículas
  // Usamos useMemo para evitar recrear el objeto de opciones en cada renderizado
  const options: ISourceOptions = useMemo(
    () => ({
      // --- CONFIGURACIÓN DE TU FONDO ---
      background: {
        // Haz que el fondo sea transparente para que se vea el fondo de tu web
        color: {
          value: "transparent", 
        },
      },
      fpsLimit: 120, // Límite de fotogramas (buen rendimiento)
      interactivity: {
        events: {
          // Permite la interacción con el mouse (ej: mover o repeler partículas)
          onHover: {
            enable: true,
            mode: "repulse", // Modo repulsión
          },
        },
        modes: {
          repulse: {
            distance: 150, // Distancia de repulsión del mouse
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ff0000ff", // Color de las partículas (blanco)
        },
        links: {
          color: "#000000ff", // Color de las líneas de conexión
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3, // Velocidad de movimiento
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80, // Número de partículas
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle", // Forma de las partículas
        },
        size: {
          value: { min: 1, max: 3 }, // Tamaño de las partículas
        },
      },
      detectRetina: true,
      // --- FIN DE LA CONFIGURACIÓN ---
    }),
    [],
  );

  // 3. Renderiza el componente Particles
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return null;
}