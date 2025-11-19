# QRListo - Generador de Códigos QR

Aplicación web moderna para generar códigos QR de manera rápida y sencilla, con sistema de autenticación integrado.

## 🚀 Características

- ✅ Generación de códigos QR para múltiples tipos de contenido:
  - Enlaces (URLs)
  - Texto
  - Email
  - Teléfono
  - SMS
  - WiFi
  - Ubicación
  - Eventos
  - Contactos
- ✅ Sistema de autenticación seguro con JWT
- ✅ Interfaz moderna y responsive
- ✅ Descarga de códigos QR en formato PNG
- ✅ Diseño con gradientes y efectos visuales

## 🛠️ Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **React 18** - Biblioteca UI
- **Framer Motion** - Animaciones
- **QRCode.react** - Generación de QR
- **JWT** - Autenticación
- **bcryptjs** - Hash de contraseñas

## 📦 Instalación Rápida

```bash
# Clonar repositorio
git clone <URL_DEL_REPOSITORIO>
cd qrlisto.site

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# Ejecutar en desarrollo
npm run dev
```

## 🔐 Credenciales por Defecto

**⚠️ IMPORTANTE**: Cambiar antes de producción

- **Email**: `admin@qrlisto.com`
- **Contraseña**: `admin123`

## 📖 Documentación

Para instrucciones detalladas de despliegue, consulta [DEPLOY.md](./DEPLOY.md)

## 🏗️ Estructura del Proyecto

```
qrlisto.site/
├── app/
│   ├── api/              # API Routes
│   │   └── auth/         # Endpoints de autenticación
│   ├── lib/              # Utilidades y configuraciones
│   │   ├── constants.ts  # Constantes
│   │   ├── types.ts      # Tipos TypeScript
│   │   ├── config/       # Configuraciones
│   │   ├── hooks/        # Hooks personalizados
│   │   └── utils/        # Utilidades
│   ├── login/            # Página de login
│   └── src/
│       └── components/    # Componentes React
├── public/               # Archivos estáticos
├── server.js            # Servidor personalizado
└── package.json         # Dependencias
```

## 🚀 Scripts Disponibles

```bash
npm run dev      # Desarrollo (puerto 3000)
npm run build    # Construir para producción
npm start        # Iniciar servidor de producción
npm run lint     # Ejecutar linter
```

## 🔒 Seguridad

- Autenticación con JWT y cookies HTTP-only
- Hash de contraseñas con bcrypt
- Validación y sanitización de inputs
- Variables de entorno para configuración sensible

## 📝 Licencia

ISC

## 👨‍💻 Desarrollo

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para soporte o preguntas, abre un issue en el repositorio.

