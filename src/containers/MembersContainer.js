import React from 'react'
import { Sidebar, Avatar, Typography } from '../components';

import { useAuth } from '../hooks/use-auth';

export default function MembersContainer() {
    const auth = useAuth();
    return (
        <>
            <Sidebar.Label hasMarginBottom>
                <Typography.BodySmall>Members</Typography.BodySmall>
            </Sidebar.Label>
            <Sidebar.Item hasSmallMarginBottom >
                <Avatar large hasIndicator backgroundURL={auth.user.photoURL} />
                <Typography.Body>{auth.user.displayName}</Typography.Body>
            </Sidebar.Item>
        </>
    );
};
