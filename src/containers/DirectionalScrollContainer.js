import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const DirectionContainer = styled.section``;

const Frame = styled(motion.div)`
    font-size: 9vw;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: -3px;
    line-height: 1.2em;
`;

const Item = styled(motion.span)`
    display: block;
    /* background-color: white; */
    white-space: nowrap;
    padding: .9rem 2.3rem;

    b {
        color: #eb5e28;
    }
`;

const initial = {
    x: 0,
}
const transition = {
    ease: "easeInOut",
    duration: 9,
    yoyo: Infinity
}

export default function DirectionalScrollContainer() {

    return (
        <DirectionContainer>
            <Frame initial={ initial } animate={{ x: -190 }} transition={ transition }>
                <Item>I'll <b>*&%/</b> that <b>*&%/</b></Item>
            </Frame>
            <Frame initial={ initial } animate={{ x: 95 }} transition={ transition } >
                <Item>Wish my <b>/(!&</b> was not that <b>?§!$</b></Item>
            </Frame>
            <Frame initial={ initial } animate={{ x: 190 }} transition={ transition } >
                <Item>I swear it was <b>&-"-!</b></Item>
            </Frame>
            <Frame initial={ initial } animate={{ x: -95}} transition={ transition } >
                <Item><b>¨$*</b> and <b>*&%/</b> a <b>.?%</b></Item>
            </Frame>
        </DirectionContainer>
    )
}