import React, { useEffect } from 'react'
import { Sidebar, Avatar, Typography, Button, Navigation } from '../components';
import { MembersContainer, RoomsContainer } from '../containers';
import { useAuth } from '../hooks/use-auth';


export default function SidebarContainer() {
    const auth = useAuth();

    console.dir(auth.user);

    useEffect(() => {
        auth.user.updateProfile({
            email: 'nuniroland@gmail.com',
            phoneNumber: '+11234567890',
            emailVerified: false,
            password: 'newPassword',
            displayName: 'Gama Niki',
            photoURL: 'https://media.giphy.com/media/h26R1JMxiqYpwp0rkF/giphy.gif',
            disabled: false,
        })
    }, [auth.user]);

    return (
        <Sidebar>
            <Navigation.LogoIcon />
            <Sidebar.Header>
                <Sidebar.Label>
                    <Typography.BodySmall>Current Room</Typography.BodySmall>
                </Sidebar.Label>
                <Sidebar.Item hasBackground>
                    <Sidebar.Item >
                        <Avatar backgroundURL='https://media.giphy.com/media/Lopx9eUi34rbq/giphy.gif' />
                        <Typography.BodySmall>Hell's Kitchen</Typography.BodySmall>
                    </Sidebar.Item>
                    <Button.Ghost>&#215;</Button.Ghost>
                </Sidebar.Item>
            </Sidebar.Header>

            <Sidebar.Body>
                <RoomsContainer />
                <MembersContainer />
            </Sidebar.Body>

            <Sidebar.Footer>
                <Typography.BodySmall>Made with <span role="img" aria-label="Anger symbol" title="Anger symbol" >💢</span> by <a style={{ color: "white" }} href="https://github.com/nnsncl" rel="noopener noreferrer" title="Go to project's creator github" target="_blank" >nuni</a>.</Typography.BodySmall>
            </Sidebar.Footer>

        </Sidebar>
    )
}
