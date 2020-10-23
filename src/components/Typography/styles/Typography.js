import styled from 'styled-components'

export const TitleLarge = styled.h1`
    font-size: 13.5rem;
    font-weight: 400;
    letter-spacing: -3.6px;
    transition: font-size ease-in .2s;
    margin-bottom: 9.5rem;

    @media(max-width: 1056px){
        font-size: 6.8rem;
        margin-bottom: 23px;
    }
`;
export const TitleMd = styled.h2`
    font-size: 5.6rem;
    font-weight: 400;
    letter-spacing: -1.9px;
    margin-bottom: 3.6rem;
    transition: font-size ease-in .2s;

    @media(max-width: 672px){
        font-size: 3.6rem;
    }
`;
export const TitleSm = styled.h3`
    font-size: 5.6rem;
    font-weight: 400;
    letter-spacing: -1.9px;
    margin-bottom: 3.6rem;
    transition: font-size ease-in .2s;

    @media(max-width: 672px){
        font-size: 3.6rem;
    }
`;
export const TitleXs = styled.h4`
    font-size: 1.9rem;
    font-weight: 800;
    margin-bottom: 13px;
`;
export const TitleXxs = styled.h5`
    font-size: 1.9rem;
`;
export const TitleH6 = styled.h6`
    font-size: 1.9rem;
`;
export const BodyLarge = styled.p`
    font-size: 2.3rem;
    line-height: 1.5em;
    margin-bottom: 23px;
`;
export const Body = styled.p`
    font-size: 1.9rem;
    font-weight: 400;
`;
export const BodySmall = styled.p`
    font-size: 1.3rem;
`;
