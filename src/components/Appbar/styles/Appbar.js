import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.3rem;
    width: 100%;
    color: #111;


`;
export const Frame = styled.div`
    display: flex;
    align-items: center;

    p {
        margin: 0;
    }
    button {
        margin-right: 1.3rem;
        &:last-of-type{
            margin-right: 0;
        }
    }
`;