import React from 'react'
import { Container, Frame, Item, Logotype } from './styles/Navigation'

export default function Navigation({ children, ...restProps }) {
    return <Container { ...restProps } >{ children }</Container>
}

Navigation.Frame = function NavigationFrame({ children, ...restProps }) {
    return <Frame { ...restProps } >{ children }</Frame>
}

Navigation.Item = function NavigationItem({ children, ...restProps }) {
    return <Item { ...restProps } >{ children }</Item>
}

Navigation.Logotype = function NavigationLogotype({ children, ...restProps }) {
    return <Logotype { ...restProps } >{ children }</Logotype>
}