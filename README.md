# Plataforma de Eventos e Inscripciones

## Descripción
Este proyecto es una API REST para una plataforma de eventos e inscripciones desarrollada con Node.js, Express, MongoDB y Mongoose. 
Forma parte de la **Pre-entrega 3** del curso Backend II. En esta etapa se implementó el sistema completo de **Autenticación con JWT y Cookies HTTP-Only**, incluyendo registro, login seguro con bcrypt, middleware de autenticación, ruta protegida `/current` y cierre de sesión (`logout`).

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Token (JWT)
- cookie-parser (manejo de cookies HTTP-Only)
- bcrypt (hasheo seguro de contraseñas)
- dotenv (variables de entorno)
- ES Modules

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
JWT_EXPIRES_IN=
NODE_ENV=

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
    └── Session.js
├── middlewares/     
    └── auth.middleware      # Middlewares de validación o autenticación
└── utils/                 # Funciones auxiliares (hasheo de contraseñas)
    └── hash.js
    └── jwt.js

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
-Response 201:
{ "status": "success", "message": "Usuario registrado correctamente" }

POST /api/sessions/login
-Descripción: Valida credenciales, compara con bcrypt y genera un jwt en cookie currentUser
-Body(JSON):
{ 
  "email": "ana@mail.com", 
  "password": "Secreta123" }
-Response 200(Seta cookie HttpOnly):
{ "status": "success", "message": "Login correcto"}
-Response 401(credenciales incorrectas):
{ "status": "error", "message": "Credenciales inválidas" }

GET /api/sessions/current
-Descripción: Ruta protegida por middleware. Lee la cookie, verifica el jwt y devuelve los datos del usuario.
-Response 200 (Con cookie válida): 
{ "status": "success", 
"payload": { "id": "665f2a...", 
"email": "ana@mail.com", 
"role": "user" } }
-Response 401 (Sin cookie o token inválido):
{ "status": "error", "message": "No autenticado" }

POST /api/sessions/logout
-Descripción: Elimina la cookie de autenticacion currentUser.
-Response 200: 
{ "status": "success", "message": "Sesión cerrada" }

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


# Notas
.env y node_modules están excluidos en .gitignore.
La arquitectura por capas fue respetada de forma estricta