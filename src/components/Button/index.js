import React from 'react'
import { Container } from './styles/Button'

export default function Button({ children, ...restProps }) {
    return (
            <Container {...restProps} >
                {children}
            </Container>
    )
}

// Button.Link = function ButtonLink({ children, ...restProps }) {
//     return <Link {...restProps} >{children}</Link>
// }