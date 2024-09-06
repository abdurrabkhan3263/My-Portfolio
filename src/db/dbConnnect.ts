import mongoose from "mongoose";

// Connect to MongoDB
type ConnectionObj = {
  isConnected?: number;
};

const connection: ConnectionObj = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || "");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("DB Connection Error:- ", error);
    process.exit(1);
  }
}

export default dbConnect;
