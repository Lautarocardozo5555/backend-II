import express from "express"
import sessionRoutes from "./routes/sessions.router.js"

const app = express ()
app.use(express.json())

//health check
app.get("/api/health", (req, res)=> {
    res.json({status:"ok", message: "Servidor activo"})
})

//rutas
// app.use("/api/events", eventsRouter)
app.use("/api/sessions", sessionRoutes)

export default app;