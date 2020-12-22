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

    ${(restProps) => restProps.hasMargin && (`
        margin: 2.3rem 0;
    `)}
`;

export const Action = styled.button`
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1.9rem 3.6rem;
    border-radius: .9rem;
    border: none;
    background: #111;
    cursor: pointer;
    transition: ease-out .2s;
    color: #f5f3f4;
    text-decoration: none;
    outline: none;

    &:hover{
        color: #111;
        background: #f5f3f4;
    }

    ${(restProps) => restProps.hasMarginBottom && (`
        margin-bottom: 2.3rem;
    `)}
`;

export const Small = styled(Action)`
    font-size: 1.6rem;
    padding: 0.9rem 1.3rem;
    border: 0.05rem solid transparent;
    opacity: 0.6;
    background: #111;
   &:hover{
        border: 0.05rem solid #212121;
        color: #f5f3f4;
        background: #111;
        opacity: 1;
    }
`;

export const Ghost = styled(Action)`
    font-size: 1.6rem;
    padding: 0.9rem 1.3rem;
    border: 0.05rem solid transparent;
    opacity: 0.6;
    background: none;
   &:hover{
        border: 0.05rem solid #212121;
        color: #f5f3f4;
        background: transparent;
        opacity: 1;
    }
    &:active{
        border: 0.05rem solid #fafafa;
    }
`;

export const Auth = styled(Action)`
    background: #f5f3f4;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #111;

    &:hover {
        background: white;
    }
    
    svg {
        width: 1.6rem;
        height: 1.6rem;
        max-width: 1.6rem;
        max-height: 1.6rem;
        margin-right: 1.3rem;
    }
`;

export const Link = styled(ReachRouterLink)`
    text-decoration: none;
    color: blue;
`;