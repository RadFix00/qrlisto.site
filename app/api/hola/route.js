// Este código solo se ejecuta en el servidor de Node.js
export async function GET() {
  const data = {
    mensaje: "Manuel es gay",
    timestamp: new Date().toISOString()
  };

  // Aquí iría tu lógica de negocio (conexión a DB, etc.)

  return Response.json(data);
}