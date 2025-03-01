import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import WhatsAppButton from '@/components/WhatsAppButton'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "JH Informática",
  description: "Serviços de informática de qualidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          {children}
          <WhatsAppButton />
        </AuthProvider>
      </body>
    </html>
  )
}
