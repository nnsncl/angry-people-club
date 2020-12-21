import styled from 'styled-components';

export const Wrapper = styled.aside`
    background: #111;
    color: white;
    max-width: 33rem;
    min-width: 33rem;
    height: 100vh;
    padding: 1.3rem 1.9rem;
    border-right: 0.05rem solid #212121;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    ${(restProps) => restProps.hasBackground
    && `
        background: #212121;
        padding: 0.9rem 0;
    `}

    ${(restProps) => restProps.hasMarginBottom
    && `margin-bottom: 3.6rem;`}

    ${(restProps) => restProps.hasSmallMarginBottom
    && `margin-bottom: 1.3rem;`}
    
    svg {
        fill: white;
        opacity: 0.6;
        transition: all ease-out .2s;
        &:hover {
            opacity: 1;
        }
    }

`;

export const Label = styled.div`
    font-weight: bold;
    margin-bottom: 1.3rem;
    opacity: .6;
`;

export const Header = styled.header`
    width: 100%;
    margin: 3.6rem 0;
`;
export const Body = styled.div`
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 2.3rem;
`;