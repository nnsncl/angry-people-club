import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 1.9rem 0;
    max-width: 66.6vw;
`;
export const Frame = styled.div`
    width: fit-content;
    &:first-of-type {
        margin-right: 1.3rem;
    }   
`;
// export const Heading = styled.div`
//     display: flex;
//     align-items: center;
//     margin-bottom: 0.9rem;
// `;

export const Content = styled.div`
    padding: 2.3rem 1.9rem 1.3rem 1.9rem;
    border-radius: 0 16px 16px 16px;
    background: #f5f3f4;
    color: #111;
    margin-bottom: 0.9rem;
    width: fit-content;
    max-width: 23vw;
    word-wrap: break-word;

    p {
        :first-of-type {
            margin-bottom: 1.3rem;
        }
    }
    
`;
