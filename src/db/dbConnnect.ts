import mongoose from "mongoose";

// Connect to MongoDB
type ConnectionObj = {
  isConnected?: number;
};

const connection: ConnectionObj = {};

async function dbConnect(): Promise<void> {
  const mongodbUrl = process.env.MONGODB_URL || "";
  const dbName = "my-portfolio";

  if (!mongodbUrl) {
    console.error("Please add your Mongo URI to .env.local");
    process.exit(1);
  }

  if (connection.isConnected) {
    return;
  }

  const url = `${mongodbUrl}${dbName}`;

  try {
    const db = await mongoose.connect(url as string);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("DB Connection Error:- ", error);
    process.exit(1);
  }
}

export default dbConnect;
