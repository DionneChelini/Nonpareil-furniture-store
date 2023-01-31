import Navbar from './Navbar'
import Footer from './Footer'
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