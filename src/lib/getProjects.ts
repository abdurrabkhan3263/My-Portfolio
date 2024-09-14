import axios from "axios";
import { Project } from "./types";

const getProjects = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/get-projects`,
    );
    if (Array.isArray(res.data.data)) {
      return res.data.data as Project[];
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getProjects;
