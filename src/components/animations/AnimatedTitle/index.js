import React from 'react'
import { Container, Frame, Item } from './styles/AnimatedTitle'

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02
        }
    }
};

const item = {
    hidden: { y: "100%" },
    visible: {
        y: "0%",
        transition: {
            ease: "anticipate",
            duration: 1
        }
    }
};

export const AnimatedTitle = restProps => {
    return (
        <Container
            variants={container}
            initial="hidden"
            animate={"visible"}>
            {restProps.children.split(" ").map((currentElement, index) => (
                <Frame key={index}>
                    <Item key={index} variants={item}>{currentElement}&nbsp;</Item>
                </Frame>
            ))}
        </Container>
    )
}
