import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/JuanChontal";

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