import { Urbanist } from "next/font/google";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";


const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "camisasTop",
  description: "Camisetas e roupas de time importadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-white" lang="en">
      <body  className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
