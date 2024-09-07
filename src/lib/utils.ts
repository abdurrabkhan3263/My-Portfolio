import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { GetServerSideProps } from "next";
import { twMerge } from "tailwind-merge";
import { Project } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
