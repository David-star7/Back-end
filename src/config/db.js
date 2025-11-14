import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://participantesjovenesenaccion_db_user:JgR083FOuB6tujW5@proyecto1.ytqgp4m.mongodb.net/?appName=DavidChontal";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Base de datos conectada con éxito 🙀 ");
    } catch (error) {
        console.error("Error en la conexión 😔:", error.message);
        process.exit(1);
    }
}


export default connectDB;