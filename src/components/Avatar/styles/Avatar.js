import styled from 'styled-components';

export const AvatarWrapper = styled.div`
    margin-right: 0.9rem;
    cursor: pointer;
`;

export const AvatarContent = styled.div`
    ${(restProps) => restProps.large
        ? ` width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;`
        : restProps.Xlarge
            ? ` width: 64px;
                height: 64px;
                min-width: 64px;
                min-height: 64px;`
            : ` width: 23px;
                height: 23px;
                min-width: 23px;
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
    width: 13px;
    height: 13px;
    background: #0ACF83;
    border-radius: 100%;
`;