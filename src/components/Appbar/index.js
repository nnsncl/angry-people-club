import React from 'react'
import { Wrapper, Frame } from './styles/Appbar';

export default function AppBar({ children, ...restProps }) {
    return <Wrapper {...restProps} >{children}</Wrapper>
}

AppBar.Frame = function AppBarFrame({ children }) {
    return <Frame>{children}</Frame>
}