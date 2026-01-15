import { Inter } from "next/font/google";
import Navbar from "./components/Navbar.js"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
