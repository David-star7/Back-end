import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();  //carga variables del entorno (.env)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`GameTracker backend activo en http://localhost:${PORT}`);
});