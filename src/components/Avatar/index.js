import React from 'react'
import { AvatarContent, AvatarWrapper } from './styles/Avatar';

export default function Avatar({ backgroundURL, ...restProps }) {
    return (
        <AvatarWrapper>
            <AvatarContent backgroundURL={backgroundURL} {...restProps} />
        </AvatarWrapper>
    );
};
