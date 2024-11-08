import dbConnect from "@/db/dbConnnect";
import { ProjectModel } from "@/model/project.model";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  await dbConnect();
  try {
    const projects =
      (await ProjectModel.find().sort({ position: 1 }).lean()) || [];
    return new Response(
      JSON.stringify({
        status: true,
        message: "Projects fetched successfully",
        data: projects,
      }),
      {
        status: 200,
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
      },
    );
  }
}
