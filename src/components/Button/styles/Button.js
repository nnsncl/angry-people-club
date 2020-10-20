import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled(ReachRouterLink)`
    appearance: button;
    -moz-appearance: button;
    -webkit-appearance: button;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1.9rem 3.6rem;
    border-radius: 5rem;
    background: white;
    cursor: pointer;
    transition: ease-out .2s;
    text-decoration: none;
    color: #111;

    &:hover{
        background: #111;
        color: white;
    }

    ${(restProps) => restProps.hasmargin && (`
        margin: 1.3rem 0;
    `)}
`;

export const Link = styled(ReachRouterLink)``;