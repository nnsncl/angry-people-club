import styled from 'styled-components';

export const Wrapper = styled.aside`
    background: #111;
    border-right: 0.05rem solid #212121;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-width: 33rem;
    max-width: 33rem;
    padding: 1.9rem 2.3rem;
`;

export const Header = styled.header`
    width: 100%;
    margin: 3.6rem 0;
`;
export const Body = styled.div`
    margin-top: 2.3rem;
    flex: 1;
`;

export const Footer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    p {
        line-height: 1.3;
    }
`;

export const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 1.3rem;
    ${(restProps) => restProps.hasMarginBottom && `margin-bottom: 2.3rem;`}
`;

export const Item = styled.div`
    display: flex;
    align-items: center;

    ${(restProps) => restProps.halfWidth
        ? `width: 50%;`
        : `width: 100%;`
    }
    ${(restProps) => restProps.hasBackground
        && `
        background: #212121;
        padding: 1.3rem;
        border-radius: 8px;
    `}
    ${(restProps) => restProps.flexItem && `justify-content: space-between;`}
    ${(restProps) => restProps.hasMarginBottom && `margin-bottom: 3.6rem;`}
    ${(restProps) => restProps.hasSmallMarginBottom && `margin-bottom: 1.3rem;`}
`;