
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}




function Layout({ children }: Props) {
  return (
    <div>

      {children}

    </div>
  )
}
Layout.displayName = "Layout"

export default Layout