import app from "./app.js"
import dotenv from "dotenv"
import { connectDB} from "./config/database.js"

dotenv.config()

const PORT = process.env.PORT || 8080

connectDB()

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})