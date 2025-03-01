import { Metadata } from 'next'
import MemberNavbar from '@/components/MemberNavbar'

export const metadata: Metadata = {
  title: 'Área do Membro - JH Informática',
  description: 'Área do membro da JH Informática',
}

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <MemberNavbar />
      {children}
    </div>
  )
}