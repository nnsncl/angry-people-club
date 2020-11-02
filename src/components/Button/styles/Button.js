import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled(ReachRouterLink)`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1.9rem 3.6rem;
    border-radius: .9rem;
    background: white;
    cursor: pointer;
    transition: ease-out .2s;
    color: #111;
    text-decoration: none;

    &:hover{
        background: #111;
        color: white;
    }

    ${(restProps) => restProps.hasmargin && (`
        margin: 2.3rem 0;
    `)}
`;

export const Link = styled(ReachRouterLink)`
    text-decoration: none;
    color: inherit;
`;