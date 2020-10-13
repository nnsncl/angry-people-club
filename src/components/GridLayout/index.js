import React from 'react'
import { GridContainer, FlexContainer, Item, Image } from './styles/GridLayout'

export default function GridLayout({ children, ...restProps }) {
    return <GridContainer { ...restProps } >{ children }</GridContainer>
}

GridLayout.FlexContainer = function GridLayoutFlexContainer({ children, ...restProps }) {
    return <FlexContainer { ...restProps } >{children}</FlexContainer>
}

GridLayout.Item = function GridLayoutItem({ children, ...restProps }) {
    return <Item { ...restProps }>{ children }</Item>
}

GridLayout.Image = function GridLayoutImage({ children, backgroundImage, ...restProps }) {
    return <Image { ...restProps } backgroundImage={backgroundImage} >{ children }</Image>
}