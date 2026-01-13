import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ritesh Dhamale | Full Stack Developer",
  description:
    "Full Stack Developer | MERN Stack | Java Spring Boot | Next.js | Researcher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
