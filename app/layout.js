

import { Inter } from "next/font/google";
import "@/assets/styles/globals.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PropertyPulse| Find The Best Property in Your Area",
  description: "Find Your Dream House",
  keyword: "rentals, find rental homes"
};

const links = [
 
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Navbar links={links}/>
 
      <div className="pt-6"/> 
        
        {children}
        

        <Footer/>
        
        </body>
    </html>
  );
}
