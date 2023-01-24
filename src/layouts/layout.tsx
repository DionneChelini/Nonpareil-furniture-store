import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { ReactNode } from 'react'

interface propTypes {
  children: ReactNode
}



export default function Layout({ children }: { children: propTypes['children'] }) {
  return (
    <>
      <Navbar />
      {children}

      <Footer />
    </>
  )
}