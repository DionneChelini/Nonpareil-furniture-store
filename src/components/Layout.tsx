
import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
type Props = {
  children?: ReactNode;
}




function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
Layout.displayName = "Layout"

export default Layout