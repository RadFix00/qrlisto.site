# Guía de Despliegue - QRListo

Esta guía te ayudará a desplegar la aplicación QRListo en un nuevo dispositivo o servidor.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** versión 18.x o superior
- **npm** versión 9.x o superior (viene incluido con Node.js)
- **Git** (para clonar el repositorio)

### Verificar instalaciones

```bash
node --version    # Debe mostrar v18.x o superior
npm --version     # Debe mostrar v9.x o superior
git --version     # Debe mostrar cualquier versión
```

## 🚀 Instalación Paso a Paso

### 1. Clonar el Repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd qrlisto.site
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias listadas en `package.json`.

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# En Windows (PowerShell)
New-Item -Path .env.local -ItemType File

# En Linux/Mac
touch .env.local
```

Agrega las siguientes variables de entorno al archivo `.env.local`:

```env
# JWT Secret Key (IMPORTANTE: Cambiar en producción)
# Genera una clave segura con: openssl rand -base64 32
JWT_SECRET=tu-secret-key-muy-segura-cambiar-en-produccion

# Entorno de ejecución
NODE_ENV=production

# Puerto (opcional, por defecto 3000)
PORT=3000
```

**⚠️ IMPORTANTE**: 
- En producción, genera una clave JWT segura usando:
  ```bash
  openssl rand -base64 32
  ```
- Nunca compartas tu `JWT_SECRET` ni lo subas al repositorio.

### 4. Verificar la Configuración

Verifica que el archivo `.env.local` existe y contiene las variables necesarias:

```bash
# Windows
type .env.local

# Linux/Mac
cat .env.local
```

## 🏃 Ejecutar la Aplicación

### Modo Desarrollo

Para desarrollo local con hot-reload:

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:3000`

### Modo Producción

#### Paso 1: Construir la aplicación

```bash
npm run build
```

Este comando:
- Compila TypeScript
- Optimiza los assets
- Genera los archivos estáticos
- Crea el build de producción en `.next/`

#### Paso 2: Iniciar el servidor de producción

```bash
npm start
```

O si prefieres usar el servidor personalizado:

```bash
node server.js
```

La aplicación estará disponible en: `http://localhost:3000` (o el puerto configurado)

## 🔒 Configuración de Seguridad

### Variables de Entorno en Producción

Asegúrate de configurar estas variables en tu servidor de producción:

1. **JWT_SECRET**: Debe ser una cadena aleatoria y segura
2. **NODE_ENV**: Debe estar en `production`
3. **PORT**: Puerto donde correrá la aplicación

### Credenciales por Defecto

**⚠️ IMPORTANTE**: Cambia las credenciales por defecto antes de desplegar en producción.

Las credenciales actuales son:
- **Email**: `admin@qrlisto.com`
- **Contraseña**: `admin123`

Para cambiar las credenciales, edita el archivo:
`app/lib/config/auth.config.ts`

Y genera un nuevo hash de contraseña:

```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('tu_nueva_contraseña', 10));"
```

## 🌐 Despliegue en Servidores

### Opción 1: Usando PM2 (Recomendado)

PM2 es un gestor de procesos para Node.js que mantiene la aplicación corriendo:

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar la aplicación
pm2 start npm --name "qrlisto" -- start

# O usando el servidor personalizado
pm2 start server.js --name "qrlisto"

# Guardar la configuración
pm2 save

# Configurar inicio automático
pm2 startup
```

### Opción 2: Usando systemd (Linux)

Crea un archivo de servicio `/etc/systemd/system/qrlisto.service`:

```ini
[Unit]
Description=QRListo Application
After=network.target

[Service]
Type=simple
User=tu_usuario
WorkingDirectory=/ruta/a/qrlisto.site
Environment=NODE_ENV=production
Environment=JWT_SECRET=tu-secret-key-segura
ExecStart=/usr/bin/node server.js
Restart=always

[Install]
WantedBy=multi-user.target
```

Luego:

```bash
sudo systemctl daemon-reload
sudo systemctl enable qrlisto
sudo systemctl start qrlisto
sudo systemctl status qrlisto
```

### Opción 3: Usando Docker

Crea un `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Construir y ejecutar:

```bash
docker build -t qrlisto .
docker run -d -p 3000:3000 --env-file .env.local qrlisto
```

## 📝 Checklist de Despliegue

Antes de considerar el despliegue completo, verifica:

- [ ] Node.js y npm están instalados
- [ ] Todas las dependencias están instaladas (`npm install`)
- [ ] Archivo `.env.local` creado con variables de entorno
- [ ] `JWT_SECRET` configurado con una clave segura
- [ ] Credenciales por defecto cambiadas
- [ ] Build de producción ejecutado exitosamente (`npm run build`)
- [ ] Aplicación probada en modo desarrollo
- [ ] Aplicación probada en modo producción
- [ ] Firewall configurado para permitir el puerto (si es necesario)
- [ ] Proceso configurado para reiniciar automáticamente (PM2/systemd)

## 🐛 Troubleshooting

### Error: "Cannot find module"

```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port already in use"

```bash
# Encontrar el proceso usando el puerto
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000

# Matar el proceso o cambiar el puerto en .env.local
```

### Error: "JWT_SECRET is not defined"

Asegúrate de que el archivo `.env.local` existe y contiene `JWT_SECRET`.

### La aplicación no inicia

1. Verifica los logs:
   ```bash
   npm run dev  # Para ver errores en desarrollo
   ```

2. Verifica que todas las dependencias estén instaladas:
   ```bash
   npm list --depth=0
   ```

3. Verifica la configuración de TypeScript:
   ```bash
   npm run build
   ```

### Problemas con el build

```bash
# Limpiar cache de Next.js
rm -rf .next
npm run build
```

## 📚 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Iniciar servidor de desarrollo

# Producción
npm run build            # Construir para producción
npm start                # Iniciar servidor de producción
node server.js           # Usar servidor personalizado

# Mantenimiento
npm run lint             # Ejecutar linter
npm audit                # Verificar vulnerabilidades
npm audit fix            # Corregir vulnerabilidades automáticamente
```

## 🔄 Actualización de la Aplicación

Para actualizar la aplicación en un servidor existente:

```bash
# 1. Detener la aplicación
pm2 stop qrlisto
# O
sudo systemctl stop qrlisto

# 2. Actualizar código
git pull origin main

# 3. Instalar nuevas dependencias
npm install

# 4. Reconstruir
npm run build

# 5. Reiniciar aplicación
pm2 restart qrlisto
# O
sudo systemctl restart qrlisto
```

## 📞 Soporte

Si encuentras problemas durante el despliegue:

1. Revisa los logs de la aplicación
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de que las variables de entorno estén configuradas correctamente
4. Consulta la documentación de Next.js: https://nextjs.org/docs

## 📄 Licencia

ISC

