
import * as reviewService from "../services/reviewService.js";

export const getReviews = async (req, res, next) => {
    try {
        const reviews = await reviewService.getAllReviews();
        res.json(reviews);
    } catch (error) {
        console.error("Error en getReviews:", error);
        res.status(500).json({ error: "Error al obtener las reseñas" });
    }
};

export const getReviewsByGame = async (req, res, next) => {
    try {
        const reviews = await reviewService.getReviewsByGame(req.params.juegoId);
        res.json(reviews);
    } catch (error) {
        console.error("Error en getReviewsByGame:", error);
        res.status(500).json({ error: "Error al obtener las reseñas del juego" });
    }
};

export const createReview = async (req, res, next) => {
    try {
        console.log("📥 Datos recibidos para crear reseña:", req.body);
        
        // Validación básica
        if (!req.body.juegoId || !req.body.usuario || !req.body.calificacion) {
            return res.status(400).json({ 
                error: "Faltan campos requeridos: juegoId, usuario, calificacion" 
            });
        }

        const newReview = await reviewService.createReview(req.body);
        console.log("✅ Reseña creada exitosamente:", newReview);
        
        res.status(201).json(newReview);
    } catch (error) {
        console.error("❌ Error en createReview:", error);
        res.status(500).json({ 
            error: "Error interno del servidor al crear la reseña",
            details: error.message 
        });
    }
};

export const updateReview = async (req, res, next) => {
    try {
        const updated = await reviewService.updateReview(req.params.id, req.body);
        res.json(updated);
    } catch (error) {
        console.error("Error en updateReview:", error);
        res.status(500).json({ error: "Error al actualizar la reseña" });
    }
};

export const deleteReview = async (req, res, next) => {
    try {
        await reviewService.deleteReview(req.params.id);
        res.json({ message: "Reseña eliminada correctamente" });
    } catch (error) {
        console.error("Error en deleteReview:", error);
        res.status(500).json({ error: "Error al eliminar la reseña" });
    }
};