import express from "express"
import cookieParser from "cookie-parser"
import sessionRoutes from "./routes/sessions.router.js"

const app = express ()

app.use(express.json())
app.use(cookieParser())
//health check
app.get("/api/health", (req, res)=> {
    res.json({status:"ok", message: "Servidor activo"})
})
//rutas
// app.use("/api/events", eventsRouter)
app.use("/api/sessions", sessionRoutes)

export default app;