import Navbar from './Navbar'
import Footer from './Footer'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}




export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}

      <Footer />
    </>
  )
}