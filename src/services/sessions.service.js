import UserRepository from "../repositories/users.repository.js";
import { createHash } from "../utils/hash.js";

const userRepository = new UserRepository()

export default class SessionsService {
    async registerUser(userData) {
        const { first_name, last_name, email, password } = userData
        //normalizamos el email
        const normalizedEmail = email.toLowerCase().trim()
        //validmamos si ya existe un usuario con ese email en la base de datos
        const existingUser = await userRepository.getUserByEmail (normalizedEmail)
        if(existingUser) {
            //error controlado que nuestro contorlador atrapa
            const error = new Error ("El email ya está registrado")
            error.statusCode = 409
            throw error
        }
        //hasheamos la contraseña de forma segura
        const hashedPassword = await createHash(password)
        //creamos el usuario con el rol user por defecto
        const newUser = await userRepository.createUser({
            first_name, 
            last_name, 
            email: normalizedEmail, 
            password: hashedPassword, role: "user"
        })
        return newUser
    }

    async getUsers() {
        const users = await userRepository.getAllUsers()
        return users
    }
}