import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Look My Nails",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-pink-400`}>
        <div className="relative z-10 bg-rose-50 shadow-[0_20px_60px_rgba(0,0,0,0.15)] pt-4 overflow-x-clip">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
