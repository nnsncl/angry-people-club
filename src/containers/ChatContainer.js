import React from 'react';
// import styled from 'styled-components';
import { Typography, Button, AppBar } from '../components';


export default function ChatContainer() {
    return (
        <div style={{ display: "flex", flex: "1", flexDirection: 'column' }}>
            <AppBar>
                <Typography.TitleXs><b>#</b>&nbsp;Room name</Typography.TitleXs>
                <AppBar.Frame>
                    <Button.Ghost>&#9656;</Button.Ghost>
                    <Button.Ghost>&#9656;</Button.Ghost>
                    <Button.Ghost>Leave the room</Button.Ghost>
                </AppBar.Frame>
            </AppBar>
            <div style={{ flex: "1" }} >
                Chat
            </div>
            <div style={{ background: '#212121', padding: '5.6rem', margin: '2.3rem', borderRadius: "8px" }} >
                Input
            </div>
        </div>
    );
};