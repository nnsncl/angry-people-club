import React from 'react'
import { Container, Frame } from './styles/Footer'

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}

Footer.Frame = function FooterFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}