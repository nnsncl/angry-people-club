import React from 'react'
import { Container, Action, Link } from './styles/Button'

export default function Button({ children, ...restProps }) {
    return (
            <Container {...restProps} >
                {children}
            </Container>
    )
}

Button.Action = function ButtonAction({ children, ...restProps }) {
    return <Action {...restProps}>{children}</Action>
}

Button.Link = function ButtonLink({ children, ...restProps }) {
    return <Link {...restProps} >{children}</Link>
}