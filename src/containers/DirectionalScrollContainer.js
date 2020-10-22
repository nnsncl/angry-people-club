import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'


const DirectionContainer = styled(motion.section)`
    right: 0;
    left: 0;
    z-index: 1;

    #pos-1 {
        transform: rotate(19deg);
    }
    #pos-2 {
        transform: rotate(-3deg);
    }
    #pos-3 {
        transform: rotate(9deg);
    }
    #pos-4 {
        transform: rotate(-3deg);
    }
    #pos-5 {

    }
    #pos-6 {
        transform: rotate(-19deg);
    }
`;

const Frame = styled(motion.div)`
    font-size: 9vw;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: -3px;
    line-height: 1.2em;
`;

const Item = styled(motion.span)`
    display: block;
    background-color: white;
    white-space: nowrap;
    padding: .9rem 2.3rem;

    span {
        color: #eb5e28;
    }
`;

export default function DirectionalScrollContainer() {
    return (
        <DirectionContainer>
            <Frame id="pos-2" >
                <Item>I'll <span>*&%/</span> that place before i quit</Item>
            </Frame>
            <Frame id="pos-3" >
                <Item>Wish my <span>/(!&</span> was not that <span>?§!$</span></Item>
            </Frame>
            <Frame id="pos-5" >
                <Item>Sabotage, this is the way</Item>
            </Frame>
            <Frame id="pos-6" >
                <Item>What was that <span>&-"-!</span></Item>
            </Frame>
            <Frame id="pos-4" >
                <Item><span>¨$*</span> and <span>*&%/</span> a <span>.?%</span> today</Item>
            </Frame>
        </DirectionContainer>
    )
}