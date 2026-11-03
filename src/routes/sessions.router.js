import { Router } from "express"
import SessionsController from "../controllers/sessions.controller.js"

const router = Router()
const sessionsController = new SessionsController()
//endpoints 
router.post("/register", sessionsController.register)
router.get("/", sessionsController.getUsers)
export default router