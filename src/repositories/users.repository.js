import UsersDao from "../dao/users.dao.js";

const usersDao = new UsersDao()

export default class UserRepository {
    async getUserByEmail(email) {
        return await usersDao.findByEmail(email)
    }
    async createUser (userData) {
        return await usersDao.save(userData)
    }
    async getAllUsers() {
        return await usersDao.findAll()
    }
}