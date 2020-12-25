import React from 'react'
import { Sidebar, Avatar, Typography, Button } from '../components';

// import { useAuth } from '../hooks/use-auth';

export default function MembersContainer({ id, room }) {
    // const auth = useAuth();
    return (
        <>
            <Sidebar.Label>
                <Typography.BodySmall>Rooms</Typography.BodySmall>
                <Button.Ghost>&#43;</Button.Ghost>
            </Sidebar.Label>
            <Sidebar.Item hasSmallMarginBottom flexItem >
                <Sidebar.Item>
                    <Avatar large backgroundURL='https://media.giphy.com/media/Lopx9eUi34rbq/giphy.gif' />
                    <Typography.Body>Hell's Kitchen</Typography.Body>
                </Sidebar.Item>
                <Button.Ghost>&#9656;</Button.Ghost>
            </Sidebar.Item>
            <Sidebar.Item hasMarginBottom flexItem >
                <Sidebar.Item>
                    <Avatar large backgroundURL='https://media.giphy.com/media/2U1WOzgmZVw2Y/giphy.gif' />
                    <Typography.Body>Los Moskitos</Typography.Body>
                </Sidebar.Item>
                <Button.Ghost>&#9656;</Button.Ghost>
            </Sidebar.Item>
        </>
    );
};
