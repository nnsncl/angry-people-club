import React from 'react'
import { Sidebar, Avatar, Typography, Button } from '../components';

import { useAuth } from '../hooks/use-auth';

export default function MembersContainer() {
    const auth = useAuth();
    return (
        <>
            <Sidebar.Label>
                <Typography.BodySmall>Rooms</Typography.BodySmall>
                <Button.Ghost>&#43;</Button.Ghost>
            </Sidebar.Label>
            <Sidebar.Item flexItem >
                <Sidebar.Item>
                    <Avatar backgroundURL='https://media.giphy.com/media/Lopx9eUi34rbq/giphy.gif' />
                    <Typography.BodySmall>Hell's Kitchen</Typography.BodySmall>
                </Sidebar.Item>
                <Button.Ghost>&#9656;</Button.Ghost>
            </Sidebar.Item>
            <Sidebar.Item hasMarginBottom flexItem >
                <Sidebar.Item>
                    <Avatar backgroundURL='https://media.giphy.com/media/2U1WOzgmZVw2Y/giphy.gif' />
                    <Typography.BodySmall>Vicious Moskitos Gang</Typography.BodySmall>
                </Sidebar.Item>
                <Button.Ghost>&#9656;</Button.Ghost>
            </Sidebar.Item>
        </>
    );
};
