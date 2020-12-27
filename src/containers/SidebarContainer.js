import React from 'react'
import { useSelector } from 'react-redux';
import { selectRoomName } from '../features/appSlice';

import { Sidebar, Typography, Navigation } from '../components';
import { MembersContainer, RoomsContainer, SidebarFooterContainer } from '../containers';

export default function SidebarContainer() {
    const roomName = useSelector(selectRoomName);

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
            { roomName
                ? <Sidebar.Header>
                    <Sidebar.Label>
                        <Typography.BodySmall>Current Room</Typography.BodySmall>
                    </Sidebar.Label>
                    <Sidebar.Item hasBackground>
                        <Typography.Body>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
                                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M10 30L6 43L19 39L10 30Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 4C10.4772 4 6 8.47705 6 14V34C6 39.5229 10.4772 44 16 44H36C41.5228 44 46 39.5229 46 34V14C46 8.47705 41.5228 4 36 4H16ZM14.8906 24.3359C13.9716 24.9487 13.7231 26.1904 14.3358 27.1094C17.3551 31.6387 21.2913 34 26 34C30.7086 34 34.6448 31.6387 37.6641 27.1094C38.2767 26.1904 38.0284 24.9487 37.1094 24.3359C36.1903 23.7236 34.9486 23.9717 34.3358 24.8906C32.0219 28.3618 29.2913 30 26 30C22.7086 30 19.9781 28.3618 17.6641 24.8906C17.0514 23.9717 15.8096 23.7236 14.8906 24.3359Z" fill="white" />
                                </svg>
                            </span>&nbsp;&nbsp;{roomName}</Typography.Body>
                    </Sidebar.Item>
                </Sidebar.Header>
                : null }
            <Sidebar.Body>
                <RoomsContainer />
                <MembersContainer />
            </Sidebar.Body>
            <SidebarFooterContainer />
        </Sidebar>
    )
}
