import styled from 'styled-components'

const mediaQueries = {
    sm: (styles) => `@media only screen and (max-width: 376px){ ${styles} }`,
    md: (styles) => `@media only screen and (max-width: 672px){ ${styles} }`,
    lg: (styles) => `@media only screen and (max-width: 1056px){ ${styles} }`,
}

export const Container = styled.section`

    ${(restProps) => restProps.maxFreeze && (`
       max-width: 1440px;
    `)}
    ${(restProps) => restProps.maxFreezeSmall && (`
       max-width: 1056px;
    `)}

    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${(restProps) => restProps.h75 && (`
        min-height: 75vh;
        align-items: flex-end;

        @media(max-width: 1056px) {
            min-height: 50vh;
        }
    `)}

    ${(restProps) => restProps.hasPadding && (`
        padding: 23vh 0;
    `)}

    @media(max-width: 1024px) {
        flex-direction:
            ${(restProps) => restProps.responsiveCol && (`
                column
            `)}
    }
`;

export const Col = styled.div`
    flex: ${(restProps) => restProps.responsiveSize
        ? `${restProps.responsiveSize}`
        : `${restProps.size}
    `};

    ${(restProps) => restProps.halfScreenLg && (`
        max-width: 50%;

        @media(max-width: 1056px) {
            max-width: 100%;
        }
    `)}


    ${(restProps) => restProps.breakPoint &&
        mediaQueries[restProps.breakPoint](`
            display: none;
    `)}

    padding: 2.3rem;
    margin: 0 9px;
`;