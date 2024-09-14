import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Nav from "@/components/Nav";
import { montserrat } from "@/components/ui/font";
import StoreProvider from "./StoreProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StoreProvider>
          <main className="bg-[#0E0C38]">
            <Nav />
            {children}
          </main>
          <Toaster />
        </StoreProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
