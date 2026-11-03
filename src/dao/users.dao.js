import { UserModel } from "../models/User.js";

export default class UsersDao {
    async findByEmail (email) {
        return await UserModel.findOne({email})
    }

    async save(userData) {
        return await UserModel.create(userData)
    }

    async findAll() {
        return await UserModel.find({}, "first_name last_name email role")
    }
}
