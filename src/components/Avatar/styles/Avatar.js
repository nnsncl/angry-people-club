import styled from 'styled-components';

export const AvatarWrapper = styled.div`
    margin-right: 0.9rem;
`;

export const AvatarContent = styled.div`
    ${(restProps) => restProps.large
        ? ` min-width: 36px;
            min-height: 36px;`
        : restProps.Xlarge
            ? ` min-width: 64px;
                min-height: 64px;`
            : ` min-width: 23px;
                min-height: 23px;`
    }
    background: lightgray;
    border-radius: ${(restProps) => restProps.squared
        ? `0.3rem`
        : `100%`
    };

   ${(restProps) => restProps.backgroundURL && `
        background-image: url(${restProps.backgroundURL});
        background-position: 50% 50%;
        background-size: cover;
    `}

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ActivityIndicator = styled.div`
    width: 9px;
    height: 9px;
    background: lightgreen;
    border-radius: 100%;
    margin: -0.2rem;
`;