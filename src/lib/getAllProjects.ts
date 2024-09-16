import axios from "axios";
import { Project } from "./types";

const getProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/get-projects`,
      {
        next: { revalidate: 5 },
      },
    );
    if (res.ok) {
      const data = await res.json();
      return data.data as Project[];
    } else {
      console.error("Error fetching projects:", res.statusText);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getProjects;
