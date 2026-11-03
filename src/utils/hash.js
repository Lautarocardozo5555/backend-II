import bcrypt from "bcrypt"
//vamos a generar un hash seguro a partir de una contraseña en texto plano
export const createHash = async (password) => {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
}
//comparar una contraseña en texto plano con un hash almacenado
export const isValidPassword = async (password, hashedPassword) => {
    return await bcrypt.compare (password, hashedPassword)
}