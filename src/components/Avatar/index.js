import React from 'react'
import { AvatarContent, AvatarWrapper, ActivityIndicator } from './styles/Avatar';

export default function Avatar({ backgroundURL, hasIndicator }) {
    return (
        <AvatarWrapper>
            <AvatarContent backgroundURL={backgroundURL} >
                { hasIndicator &&  <ActivityIndicator /> }
            </AvatarContent>
        </AvatarWrapper>
    );
};
