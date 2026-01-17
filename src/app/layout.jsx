"use client";

import { SessionProvider } from "next-auth/react"; 
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";

export default function RootLayout({ children }) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            
            <Navbar />
            
            <main className="min-h-screen">
              {children}
            </main>
            
            <Footer />
            
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}