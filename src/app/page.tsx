import AllAboutPageComponents from "@/components/pageComponents/AllAboutPageComponents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "About me page",
};

export default function Home() {
  return (
    <div style={{ minHeight: "calc(100vh - 80px)" }} className="px-9 lg:px-24">
      <AllAboutPageComponents />
    </div>
  );
}
