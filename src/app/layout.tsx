import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/footer";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arun Dhungana",
  description: "Protfolio website made using express and nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex flex-col min-h-screen dark:bg-black `}
      >
        <Providers>
          {/* <Navbar></Navbar> */}
          <div className=" lg:mx-auto lg:w-[60%]">{children}</div>
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
