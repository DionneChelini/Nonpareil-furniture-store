
import { ReactNode } from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
type Props = {
  children?: ReactNode
  title?: string
}




function Layout({ children }: Props) {
  return (
    <div>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}
Layout.displayName = "Layout"

export default Layout