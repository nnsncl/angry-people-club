import React from 'react'
import { Sidebar, Avatar, Typography, Button } from '../components';

import { useAuth } from '../hooks/use-auth';

export default function MembersContainer() {
    const auth = useAuth();
    return (
        <>
            <Sidebar.Label>
                <Typography.BodySmall>Members</Typography.BodySmall>
                <Button.Ghost>&#43;</Button.Ghost>
            </Sidebar.Label>
            <Sidebar.Item hasSmallMarginBottom >
                <Avatar hasIndicator backgroundURL={auth.user.photoURL} />
                <Typography.BodySmall>{auth.user.displayName}</Typography.BodySmall>
            </Sidebar.Item>
        </>
    );
};
