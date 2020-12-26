import React from 'react'
import { useSelector } from 'react-redux';
import { Sidebar, Avatar, Typography } from '../components';
import { selectUser } from '../features/userSlice';

export default function MembersContainer() {
    const user = useSelector(selectUser)

    return (
        <>
            <Sidebar.Label hasMarginBottom>
                <Typography.BodySmall>Members</Typography.BodySmall>
            </Sidebar.Label>
            <Sidebar.Item hasSmallMarginBottom >
                <Avatar large hasIndicator backgroundURL={user.photo} />
                <Typography.Body>{user.displayName}</Typography.Body>
            </Sidebar.Item>
        </>
    );
};
