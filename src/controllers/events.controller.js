import { Event } from "../models/Event.js"

export const getEvents = async (req, res) => {
    try{
        const events = await Event.find()
        res.status(200).json({status:"success", payload: events})
    } catch(error){
        res.status(500).json({status:"error", message:"Error al obtener los eventos"})
    }
}

export const createEvent = async (req, res) => {
    try{
        const { title, date, location, capacity} = req.body
        if(!title || !date) {
            return res.status(400).json({status:"error", message:"Faltan campos obligatorios"})
        }
        const newEvent = await Event.create({title, date, location, capacity })
        res.status(201).json({ status: "success", payload: newEvent })
    } catch (error) {
        res.status(500).json({ status: "error", message: "Error al crear evento" })
    }
}