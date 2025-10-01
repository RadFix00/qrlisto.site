const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Next.js por defecto corre en modo 'production' si NODE_ENV no está definido
const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost'; // No cambies esto
const port = process.env.PORT || 3000; // Usará el puerto que le asigne Plesk

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Maneja todas las peticiones con el motor de Next.js
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error handling request', err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});