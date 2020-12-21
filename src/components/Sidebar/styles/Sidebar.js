import styled from 'styled-components';

export const Wrapper = styled.aside`
    background: #111;
    color: white;
    max-width: 33rem;
    min-width: 33rem;
    height: 100vh;
    padding: 1.3rem 1.9rem;
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
    margin-top: 3.6rem;
`;
export const Body = styled.div`
    margin-top: 3.6rem;
`;

export const AvatarWrapper = styled.div`
    margin-right: 0.9rem;
`;

export const AvatarContent = styled.div`
    min-width: 23px;
    min-height: 23px;
    background: lightgray;
    border-radius: 5px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ActivityIndicator = styled.div`
    width: 9px;
    height: 9px;
    background: green;
    border-radius: 100%;
    margin: -0.2rem;
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 2.3rem;
`;