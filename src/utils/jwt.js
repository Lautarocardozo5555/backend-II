import jwt from "jsonwebtoken"

//generamos un token
export const generateToken = (payload) => {
//usamos la variable de entorno y configuramos la expiracion
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    })
} 
//verifica la validez y firma del token
export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}