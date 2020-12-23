import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.3rem;
    width: 100%;

    border-bottom: 0.05rem solid #212121;

    h1, h2, h3, h4{
        line-height: 0;
        margin: 0;
    }
`;
export const Frame = styled.div`
    display: flex;
    align-items: center;

    button {
        margin-right: 1.3rem;
        &:last-of-type{
            margin-right: 0;
        }
    }
`;