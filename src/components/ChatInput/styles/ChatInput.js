import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: white;
    padding: 1.9rem;
    border-radius: 8px;

    -webkit-box-shadow: 0px 10px 15px -5px rgba(0,0,0,0.1); 
    box-shadow: 0px 10px 15px -5px rgba(0,0,0,0.1);
`;

export const Frame = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const IconFrame = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2.3rem;
`;

export const IconContainer = styled.button`
    margin: 0 1.3rem 0 0;
    padding: 0;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    opacity: 0.6;
    transition: all ease-out .2s;

    :last-of-type{
        margin-right: 0;
    }

    :hover {
        opacity: 1;
    }
`;

export const Form = styled.form`
    width: 100%;
`;

export const Input = styled.input`
    padding: 1.3rem 0;
    margin-left: 1.3rem;
    outline: none;
    border: none;
    background: transparent;
    font-size: 1.6rem;
    width: 100%;
    word-break: break-word;
    -webkit-box-orient: vertical;  
    ::placeholder{
        opacity: 0.3;
        transition: all ease-out .2s;
    }
    :disabled{
        cursor: not-allowed;
        ::placeholder{
            opacity: 0.3
        }   
    }
`;