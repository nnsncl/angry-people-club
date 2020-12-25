import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #212121;
    padding: 3.6rem;
    margin: 2.3rem;
    border-radius: 8px;
`;
export const Frame = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    button{
        margin-right: 1.3rem;
    }
`;

export const IconContainer = styled.span`
    margin-right: 1.3rem;
    :last-of-type{
        margin-right: 0;
    }
`;

export const Form = styled.form`
    width: 100%;

    button {
        visibility: none;
        display: none;
        cursor: none;
    }
`;

export const Input = styled.input`
    padding: 1.3rem 0;
    margin-bottom: 2.3rem;
    outline: none;
    border: none;
    background: transparent;
    font-size: 1.6rem;
    color: white;
    width: 100%;
    word-break: break-word;
    -webkit-box-orient: vertical;  
    ::placeholder{
        transition: all ease-out .2s;
    }
    :hover{
        ::placeholder {
        color: white;
    }
    }
`;