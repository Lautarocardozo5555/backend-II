# Plataforma de Eventos e Inscripciones

## Descripción
Este proyecto es la base arquitectónica y lógica de una API REST para una plataforma de eventos e inscripciones.
Forma parte de la **Pre-entrega 2** del curso Backend II. En esta entrega se implementó un **registro seguro de usuarios** bajo una **arquitectura por capas estricta** (Routing, Controller, Service, Repository, DAO y Model), junto con el hasheo seguro de contraseñas.

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB + Mongoose
-bcrypt (hasheo seguro de contraseñas)
- dotenv (manejo de variables de entorno)
- ES Modules (import/export)

## Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/proyecto-eventos.git
   cd proyecto-eventos
2. Instalar dependencias:
npm install 
3. Configurar variables de entorno:
Crear un archivo .env en la raíz del proyecto basándose en .env.example.

## Variables de entorno
Archivo .env.example incluido en el repo:
PORT=
NODE_ENV=
MONGO_URL=
JWT_SECRET=

# Ejecución:
Para iniciar el servidor en modo desarrollo con nodemon:
npm run dev
O en modo produccion: 
node src/server.js

# Estructura de carpetas
src/
├── app.js                 # Configuración de Express y middleware
├── server.js              # Punto de entrada y conexión a la DB
├── config/                # Configuración de la base de datos
│   └── database.js
├── routes/                # Enrutadores / Endpoints
│   ├── events.router.js
│   └── sessions.router.js
├── controllers/           # Manejo de req/res y códigos de estado HTTP
│   ├── events.controller.js
│   └── sessions.controller.js
├── services/              # Lógica de negocio (normalización, validaciones)
│   └── sessions.service.js
├── repositories/          # Abstracción entre Servicio y Persistencia
│   └── users.repository.js
├── dao/                   # Data Access Object (Acceso directo a MongoDB)
│   └── users.dao.js
├── models/                # Esquemas y Modelos de Mongoose
│   ├── User.js
│   └── Event.js
├── middlewares/           # Middlewares de validación o autenticación
└── utils/                 # Funciones auxiliares (hasheo de contraseñas)
    └── hash.js

# Rutas disponibles:
GET/api/health: 
-Descripción: Verifica el estado del servidor.
- Respuesta: { "status": "ok", "message": "Servidor activo" }
POST /api/sessions/register 
- Descripción: Registro seguro de un nuevo usuario.
-Body(JSON):
{
  "first_name": "Ana",
  "last_name": "Pérez",
  "email": "ana@mail.com",
  "password": "Secreta123"
}
-Características y validaciones:
Campos obligatorios requeridos (400 Bad Request).

Contraseña de al menos 6 caracteres (400 Bad Request).

Detección de email duplicado (409 Conflict).

Normalización de email a minúsculas y trim().

Hasheo de contraseña con bcrypt antes de guardar en la DB.

Seguridad: El hash de la contraseña no se expone en la respuesta JSON.
-Respuesta (201 created):
{
  "status": "success",
  "message": "Usuario registrado correctamente",
  "payload": {
    "id": "64f...123",
    "first_name": "Ana",
    "last_name": "Pérez",
    "email": "ana@mail.com",
    "role": "user"
  }
}
GET /api/sessions:
-Descripción: Obtiene el listado de usuarios registrados (solo campos seguros).
-Respuesta(200 OK): Devuelve la lista de usuarios omitiendo contraseñas.

# Notas
.env y node_modules están excluidos en .gitignore.
La arquitectura por capas fue respetada de forma estricta: las rutas llaman a controladores, los controladores a servicios, los servicios a repositorios y los repositorios a DAOs.
