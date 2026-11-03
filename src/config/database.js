import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Base de datos conectada")
    } catch(error) {
        console.log("Error al conectar MongoDB", error.message)
        process.exit(1)
    }
}