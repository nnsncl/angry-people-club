import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 2.3rem 0;
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
    padding: 1.3rem 1.3rem 0.3rem 1.3rem;
    border-radius: 0 16px 16px 16px;
    background: white;
    color: #111;
    margin-bottom: 0.9rem;
    width: fit-content;

    p {
        :first-of-type {
            margin-bottom: 1.3rem;
        }
    }
    
`;
