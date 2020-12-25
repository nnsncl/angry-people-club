import React from 'react';
import { Wrapper, Frame, Heading, Content } from './styles/Message';
import { Avatar, Typography } from '../../components';

import { useAuth } from '../../hooks/use-auth';

export default function Message() {
    const auth = useAuth();

    return (
        <Wrapper>
            <Frame>
                <Avatar Xlarge backgroundURL={auth.user.photoURL} />
            </Frame>
            <Frame>
                <Heading>
                    <Typography.Body><b>{auth.user.displayName}</b>&nbsp;•&nbsp;</Typography.Body>
                    <Typography.BodySmall>Sent the 12/12/2012</Typography.BodySmall>
                </Heading>
                <Content>
                    <Typography.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography.Body>
                </Content>
            </Frame>
        </Wrapper>
    );
};