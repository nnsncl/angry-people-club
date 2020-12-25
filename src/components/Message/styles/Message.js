import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 3.6rem 0;
    border-bottom: 0.05rem solid #212121;
    width: 100%;
`;
export const Frame = styled.div`
    width: fit-content;
    &:first-of-type {
        margin-right: 1.3rem;
    }   
`;
export const Heading = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    p {
        &:last-of-type{
            opacity: 0.6;
        }
    }
`;

export const Content = styled.span`
    p {
        line-height: 1.2;
        opacity: 0.8;
    }
`;
