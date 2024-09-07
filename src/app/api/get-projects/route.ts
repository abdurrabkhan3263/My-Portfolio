import dbConnect from "@/db/dbConnnect";
import mongoose from "mongoose";

export async function GET(request: Request) {
  await dbConnect();
  try {
    const db = mongoose.connection.db;
    const projects =
      (await db?.collection("projects")?.find({}).toArray()) ?? [];

    return new Response(
      JSON.stringify({
        status: true,
        message: "Projects fetched successfully",
        data: projects,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return new Response(
      JSON.stringify({
        status: false,
        message: "Something went wrong",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
