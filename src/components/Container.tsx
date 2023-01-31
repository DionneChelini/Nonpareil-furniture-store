/* This example requires Tailwind CSS v2.0+ */
import { ReactNode } from 'react'


interface propTypes {
    children: ReactNode
}



function Container({ children }: { children: propTypes['children'] }) {
    return <div className="mx-auto relative">{children}</div>
}

Container.displayName = "Container"

export default Container