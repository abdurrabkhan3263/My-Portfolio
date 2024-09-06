import { MessageModel } from "@/model/message.model";
import dbConnect from "@/db/dbConnnect";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const data = await request.json();
    console.log("FORM DATA IS:-     ", data);
    return Response.json(
      {
        status: true,
        message: "Message is sended successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      {
        status: false,
        message: "Failed to send the message try again",
      },
      { status: 500 },
    );
  }
}
