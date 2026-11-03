import SessionsService from "../services/sessions.service.js";

const sessionsService = new SessionsService()

export default class SessionsController {
    async register (req, res) {
        try {
            const { first_name, last_name, email, password } = req.body
            //validacion de entrada: verificar que lleguen todos los campos obligatorios
            if(!first_name || !last_name || !email || !password) {
                return res.status(400).json({
                    status:"error",
                    message:"Faltan campos obligatorios"
                })
            }
            //validacion de caracteres minimos en contraseña
            if( password.length < 6) {
                return res.status(400).json({
                    status:"error",
                    message:"La contraseña debe tener al menos 6 caracteres"
                })            
            
            }
            //llamamos al service para procesar el registro de negocio
            const newUser = await sessionsService.registerUser({
                first_name,
                last_name,
                email,
                password
            })
            //respuesta exitosa
            return res.status(201).json({
                status:"success",
                message:"Usuario registrado correctamente",
                payload:{
                    id: newUser._id,
                    first_name: newUser.first_name,
                    last_name: newUser.last_name,
                    email: newUser.email,
                    role: newUser.role
                }
            })
        } catch (error) {
            //error controlado (como email duplicado)
            if(error.statusCode) {
                return res.status(error.statusCode).json({
                    status:"error",
                    message: error.message
                })
            }
            //error critico de servidor por defecto
            console.error("error en el registro", error)
            return res.status(500).json({
                    status:"error",
                    message:"Error interno del servidor"
            })
        }
    }
    async getUsers(req, res) {
        try {
            const users = await sessionsService.getUsers();
            return res.status(200).json({
                status: "success",
                payload: users
            });
        } catch (error) {
            console.error("Error al obtener los usuarios", error);
            return res.status(500).json({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}