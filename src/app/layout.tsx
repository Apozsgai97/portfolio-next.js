import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from "next/font/google"
import { Navbar } from "@/features";

const roboto = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
}); 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  bg-zinc-800`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
