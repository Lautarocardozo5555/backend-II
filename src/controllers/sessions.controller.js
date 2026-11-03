import { Session } from "../models/Session.js"

export const getSessions = async (req, res) => {
    try {
        const sessions = await Session.find().populate("userId", "first_name last_name email")
        res.status(200).json({ status: "success", payload: sessions })
} catch (error) {
    res.status(500).json({ status: "error", message: "Error al obtener sesiones" })
}
}

export const createSession = async (req, res) => {
    try {
        const { userId, expiresAt } = req.body
        if (!userId) {
    return res.status(400).json({ status: "error", message: "Falta userId" })
    }
    const newSession = await Session.create({ userId, expiresAt })
    res.status(201).json({ status: "success", payload: newSession })
} catch (error) {
    res.status(500).json({ status: "error", message: "Error al crear sesión" })
}
}
