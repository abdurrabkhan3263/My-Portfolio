import mongoose, { Document, Schema } from "mongoose";

export interface Message extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
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
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

export const MessageModel =
  (mongoose.models.Message as mongoose.Model<Message>) ||
  mongoose.model("Message", messageSchema);
