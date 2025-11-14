import { Router } from "express";
import {
  getGames,
  getGame,
  createGame,
  updateGame,
  deleteGame
} from "../controllers/gameController.js";

const router = Router();

router.get("/", getGames);
router.get("/:id", getGame);
router.post("/", createGame);
router.put("/:id", updateGame);
router.delete("/:id", deleteGame);

console.log("Rutas de juegos cargadas")

export default router;
