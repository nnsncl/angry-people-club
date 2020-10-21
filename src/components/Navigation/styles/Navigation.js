import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Container = styled.nav`
    padding: 2.3rem;
`;

export const Frame = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        margin-left: .9rem;
    }
`;


export const Logotype = styled(ReachRouterLink)`
    ${'' /* font-size: 3.6rem;
    line-height: .9em;
    letter-spacing: -1.3px;
    cursor: pointer;
    font-family: 'Germania One', cursive; */}
    appearance: button;
    -moz-appearance: button;
    -webkit-appearance: button;
    ${'' /* padding: 2.3rem;
    border-radius: 2rem;
    background: white; */}
    cursor: pointer;
    transition: ease-out .2s;
    text-decoration: none;
`;
