import mongoose, { Document, Schema } from "mongoose";

export interface Project extends Document {
  title: string;
  description: string;
  image: {
    publicId: string;
    url: string;
  };
  video: {
    publicId: string;
    url: string;
  };
  link: string;
  createdAt: Date;
  position: number;
}

const projectSchema: Schema<Project> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: {
        publicId: String,
        url: String,
      },
      required: true,
    },
    video: {
      type: {
        publicId: String,
        url: String,
      },
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
    },
  },
  { timestamps: true },
);

export const ProjectModel =
  (mongoose.models.Project as mongoose.Model<Project>) ||
  mongoose.model("Project", projectSchema);
