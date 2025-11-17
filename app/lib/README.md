# Librería de Utilidades

Este directorio contiene utilidades, hooks, tipos y constantes compartidas de la aplicación.

## Estructura

```
lib/
├── constants.ts          # Constantes de la aplicación
├── types.ts             # Tipos e interfaces TypeScript
├── config/              # Configuraciones
│   └── auth.config.ts   # Configuración de autenticación
├── hooks/               # Hooks personalizados de React
│   └── useAuth.ts       # Hook para manejo de autenticación
└── utils/               # Utilidades
    ├── validation.ts    # Funciones de validación
    ├── qr-formatter.ts  # Formateo de valores QR
    └── error-handler.ts # Manejo de errores
```

## Uso

### Constantes

```typescript
import { ROUTES, API_ROUTES, QR_TYPES } from '@/app/lib/constants';
```

### Tipos

```typescript
import { User, AuthResponse, QrType } from '@/app/lib/types';
```

### Hooks

```typescript
import { useAuth } from '@/app/lib/hooks/useAuth';

const { isAuthenticated, isLoading, logout } = useAuth();
```

### Utilidades

```typescript
import { validateLoginCredentials, sanitizeInput } from '@/app/lib/utils/validation';
import { formatQrValue } from '@/app/lib/utils/qr-formatter';
```

