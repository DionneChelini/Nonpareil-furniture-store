import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}




export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}

      <Footer />
    </div>
  )
}