import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'
import { motion } from 'framer-motion';

export const Container = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    margin: auto;
    width: 100%;
    z-index: 1000;
`;

export const Frame = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.3rem;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        margin-left: .9rem;
        @media(max-width: 1056px) { display: none; }
    }
`;


export const Logotype = styled(ReachRouterLink)`
    ${'' /* font-size: 3.6rem;
    line-height: .9em;
    letter-spacing: -1.3px;
    cursor: pointer;
    font-family: 'Germania One', cursive; */}
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    ${'' /* padding: 2.3rem;
    border-radius: 2rem;
    background: white; */}
    cursor: pointer;
    transition: ease-out .2s;
    text-decoration: none;

    svg {
    }
`;
