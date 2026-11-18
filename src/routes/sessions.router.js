import { Router } from "express"
import SessionsController from "../controllers/sessions.controller.js"
import { auth } from "../middlewares/auth.middleware.js"

const router = Router()
const sessionsController = new SessionsController()

//rutas publicas 
router.post("/register", sessionsController.register)
router.get("/", sessionsController.getUsers)
router.post("/login", sessionsController.login)
//rutas privadas
router.get("/current", auth, sessionsController.getCurrentUser);
router.post("/logout", sessionsController.logout);

export default router