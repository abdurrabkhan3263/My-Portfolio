import mongoose, { Document, Schema } from "mongoose";

export interface Message extends Document {
  name: string;
  email: string;
  message: string;
}

const messageSchema: Schema<Message> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Message =
  (mongoose.models.Message as mongoose.Model<Message>) ||
  mongoose.model("Message", messageSchema);
