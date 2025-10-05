import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/components/providers/modal-provider";
import ToastProvider from "@/components/providers/toast-provider";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Store",
  description: "Store Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <ModalProvider/>
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
