import React from 'react'
import { Sidebar, Avatar, Typography, Navigation } from '../components';
import { MembersContainer, RoomsContainer, SidebarFooterContainer } from '../containers';
// import { useAuth } from '../hooks/use-auth';


export default function SidebarContainer() {
    // const auth = useAuth();

    // console.dir(auth.user.uid);

    // useEffect(() => {
    //     auth.user.updateProfile({
    //         email: 'nuniroland@gmail.com',
    //         phoneNumber: null,
    //         emailVerified: true,
    //         password: null,
    //         displayName: 'Gama Niki',
    //         photoURL: 'https://media.giphy.com/media/Ny0wKKu09ppug/giphy.gif',
    //         disabled: false,
    //     })
    // }, [auth.user]);

    return (
        <Sidebar>
            <Navigation.LogoIcon />

            <Sidebar.Header>
                <Sidebar.Label>
                    <Typography.BodySmall>Current Room</Typography.BodySmall>
                </Sidebar.Label>
                <Sidebar.Item hasBackground>
                    <Typography.Body><b>#</b>&nbsp;&nbsp;Hell's Kitchen</Typography.Body>
                </Sidebar.Item>
            </Sidebar.Header>

            <Sidebar.Body>
                <RoomsContainer />
                <MembersContainer />
            </Sidebar.Body>
            <SidebarFooterContainer />
        </Sidebar>
    )
}
