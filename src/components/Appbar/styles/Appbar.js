import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.3rem 0;
    width: 100%;
`;
export const Frame = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;

    p, h5, h6 {
        margin: 0 0 0 2.3rem;
    }
    button {
        margin-right: 1.3rem;
        &:last-of-type{
            margin-right: 0;
        }
    }
`;