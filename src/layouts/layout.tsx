import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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