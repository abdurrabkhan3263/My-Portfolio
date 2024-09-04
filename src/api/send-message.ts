import dbConnect from "@/db/dbConnnect";

export default async function POST() {
  await dbConnect();
  try {
  } catch (error) {}
}
