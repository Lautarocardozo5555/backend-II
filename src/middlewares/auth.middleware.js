import { verifyToken } from "../utils/jwt.js";

export const auth = (req, res, next) => {

    try {
        //lee la cookie currentUser gracias a cookie-parser
        const token = req.cookies.currentUser

        if(!token) {
        return res.status(401).json({
            status:"error",
            message:"No autenticado"
        })
    }
    //verifica el jwt y guarda el payload en req.user
    const decoded = verifyToken(token)
        req.user = decoded

        next()
    } catch (error) {
        return res.status(401).json({
            status:"error",
            message:"Token inválido o expirado"
        })
    }
}