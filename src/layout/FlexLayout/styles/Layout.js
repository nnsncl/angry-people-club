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
    ${(restProps) => restProps.hasPadding && (`
        padding: 9.5rem 0;
    `)}
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${(restProps) => restProps.hasPadding && (`
        padding: 22.6rem 0;
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

    ${(restProps) => restProps.breakPoint &&
        mediaQueries[restProps.breakPoint](`
            display: none;
    `)}

    padding: 2.3rem;
    margin: 0 9px;
`;