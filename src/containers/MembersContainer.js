import React from 'react'
import { Sidebar, Avatar, Typography } from '../components';

import { useAuth } from '../hooks/use-auth';

export default function MembersContainer() {
    const auth = useAuth();
    return (
        <>
            <Sidebar.Label>
                <Typography.BodySmall>Members</Typography.BodySmall>
            </Sidebar.Label>
            <Sidebar.Item hasSmallMarginBottom >
                <Avatar hasIndicator backgroundURL={auth.user.photoURL} />
                <Typography.BodySmall>{auth.user.displayName}</Typography.BodySmall>
            </Sidebar.Item>
        </>
    );
};
