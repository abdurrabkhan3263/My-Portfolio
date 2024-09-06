import dbConnect from "@/db/dbConnnect";
import mongoose from "mongoose";

export async function GET(request: Request) {
  await dbConnect();
  try {
    const projects = await mongoose.model("projects").findOne();
    console.log("Models are ", projects);
    return Response.json({
      status: true,
      message: "Projects fetched successfully",
      data: projects,
    });
  } catch (error) {
    return Response.json(
      {
        status: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
