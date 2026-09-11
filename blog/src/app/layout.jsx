import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Topo from "@/components/Topo";
import Rodape from "@/components/Rodape";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // 400 é normal, 700 é negrito
  variable: "--font-poppins", // Nome da variável que usaremos no CSS
});

export const metadata = {
  title: "Primeira aplicação Next.JS",
  description: "Aprendendo ecossistema React!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${poppins.variable}`}>
      <body>
        
        <Topo/>

        {children}
        
        <Rodape/>
        
        </body>
    </html>
  );
}
