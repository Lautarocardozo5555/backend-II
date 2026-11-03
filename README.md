# Plataforma de Eventos e Inscripciones

## Descripción
Este proyecto es la base arquitectónica inicial de una API REST para una plata forma de eventos e inscripciones.
Forma parte de la **Pre-entrega 1** del curso Backend II y servirá como punto de partida para futuras entregas donde se incorporarán autenticación, roles, gestión de eventos, inscripciones y más.

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB + Mongoose
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
Crear un archivo .env en la raíz del proyecto.
Copiar las claves de .env.example y completar con tus valores.

## Variables de entorno
Archivo .env.example incluido en el repo:
PORT=
NODE_ENV=
MONGO_URL=
JWT_SECRET=

# Ejecución:
node src/server.js
El servidor se iniciará en el puerto definido en .env

# Estructura de carpetas
src/
├── app.js                # Configura Express y las rutas
├── server.js             # Levanta el servidor
├── config/               # Configuración (ej: conexión DB)
│   └── database.js
├── routes/               # Definición de endpoints
│   ├── events.router.js
│   └── sessions.router.js
├── controllers/          # Lógica de request/response
│   ├── events.controller.js
│   └── sessions.controller.js
├── services/             # Lógica de negocio (vacío en esta entrega)
├── repositories/         # Operaciones de datos (vacío en esta entrega)
├── dao/                  # Acceso a persistencia (vacío en esta entrega)
├── models/               # Modelos de MongoDB
│   ├── User.js
│   └── Event.js
├── middlewares/          # Validaciones intermedias (vacío en esta entrega)
└── utils/                # Funciones auxiliares (vacío en esta entrega)

# Rutas disponibles:
GET/api/health: 
- Respuesta: { "status": "ok", "message": "Servidor activo" }
GET/api/events:
- Respuesta inicial (lista vacia): { "status": "success", "payload": [] }
GET/api/sessions: 
- Respuesta inicial (lista vacia): { "status": "success", "payload": [] }

# Notas
.env y node_modules están excluidos en .gitignore.
.env.example se incluye para guiar la configuración.
Esta entrega no incluye autenticación, roles ni lógica avanzada: solo la base arquitectónica.
Próximas entregas agregarán registro, login, JWT, cookies, Passport, roles, autorización, gestión de eventos, inscripciones y notificaciones.