import React from 'react'
import { AvatarContent, AvatarWrapper, ActivityIndicator } from './styles/Avatar';

export default function Avatar({ backgroundURL, hasIndicator, ...restProps }) {
    return (
        <AvatarWrapper>
            <AvatarContent backgroundURL={backgroundURL} {...restProps} >
                { hasIndicator &&  <ActivityIndicator /> }
            </AvatarContent>
        </AvatarWrapper>
    );
};
