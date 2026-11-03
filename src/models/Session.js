import mongoose from "mongoose"

const sessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date }
})

export const Session = mongoose.model("Session", sessionSchema)
