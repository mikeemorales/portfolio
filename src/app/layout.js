import { Inter } from "next/font/google";
import "../styles/globals.css";
import TopNav from "@/app/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mikee Morales",
  description: "A frontend portfolio by Mikee Morales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TopNav/>
      {children}
      </body>
    </html>
  );
}
