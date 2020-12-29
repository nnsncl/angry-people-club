import styled from 'styled-components';


export const Wrapper = styled.aside`
    color: white;
    display: flex;
    flex-direction: column;
    width: fit-content;
    min-width: 36rem;
    max-width: 36rem;
    height: 100%;

    @media(max-width: 1024px){
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`;

export const Header = styled.header`
    width: 100%;
    margin: 3.6rem 0;
`;
export const Body = styled.div`
    margin-top: 5.6rem;
    flex: 1;
`;

export const Footer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 1.3rem;
    ${(restProps) => restProps.hasMarginBottom && `margin-bottom: 2.3rem;`}
`;

export const List = styled.ul`
    list-style: none;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    
    height: 100%;
    max-height: 66.6vh;
    min-width: 19rem;
    @media(max-width: 674px){
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all ease-out .2s;
    background: #181819;
    padding: 1.3rem;
    border-radius: 8px;
    margin-bottom: 1.3rem;

    :hover {
        background: #111;
    }

`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    ${(restProps) => restProps.flexItem && `justify-content: space-between;`}
`;