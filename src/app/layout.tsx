import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from "next/font/google"
import { Navbar } from "@/features";

const roboto = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
}); 
export const metadata: Metadata = {
  title: "Adrienn Pozsgai",
  description: "Portfolio by Adrienn Pozsgai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-zinc-800`}>
        <Navbar />
        {children}
        <footer className="footer footer-center border-t-2 border-[#7A5C65] p-4 text-neutral-50">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Adrienn Pozsgai
            </p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
