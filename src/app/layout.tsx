
import { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "JH INformática - Software e Tecnologia",
  description: "A JH INformática é uma empresa especializada em software e tecnologia, com foco em soluções personalizadas para empresas de todos os portes. Oferecemos uma ampla gama de produtos e serviços, desde software de escritório até soluções de segurança e tecnologia da informação. Nossa equipe de especialistas está sempre pronta para ajudar nossos clientes a alcançar seus objetivos com eficiência e segurança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
