
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        juegoId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Game", 
            required: true 
        },
        usuario: { type: String, required: true },
        calificacion: { 
            type: Number, 
            required: true, 
            min: 1, 
            max: 5 
        },
        horasJugadas: { type: Number, required: true },
        dificultad: { type: String, required: true },
        comentario: { type: String, required: true },
        recomendaria: { type: Boolean, default: true },
        fechaCreacion: { type: Date, default: Date.now }
    },
    { versionKey: false }
);

export default mongoose.model("Review", reviewSchema);